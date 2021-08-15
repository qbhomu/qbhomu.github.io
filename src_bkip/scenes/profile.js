import Phaser from 'phaser'
import { Client, socket } from '../Client.js';
import { _4box } from '../4box.js';
import { player } from '../playervars.js';
var sizes = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0];
var iw, ih, nameinput, profile, namepreview, profile_container, dws;
export default class Profile extends Phaser.Scene {
    constructor() {
        super({ key: 'profile', active: true });
    }

    preload() {
        this.load.image('settings', 'assets/profile/namesettings.png');
        this.load.image('swatch', 'assets/profile/swatch.png');
        this.load.image('circle', 'assets/profile/swatchcircle.png');
        this.load.image('ok', 'assets/profile/ok.png');
        this.load.image('ok_white', 'assets/profile/ok_white.png');
        this.load.image('close', 'assets/profile/close.png');
        this.load.image('close_white', 'assets/profile/close_white.png');
    }

    create() {
        dws = profile = this.scene.get('dws');
        profile_container = this.add.container(_4box.scale.width / 2, _4box.scale.height / 2);
        profile_container.setVisible(false);
        this.isOpen = false;
        this.color = new Phaser.Display.Color();
        this.settings = this.add.image(0, 0, 'settings');
        ih = this.settings.height;
        iw = this.settings.width;
        var divhtml = `<div id="div_profile" style ="width: ${this.settings.width}px; height: ${this.settings.height}px;"></div>`;
        //DOM Parent
        profile = this.add.dom(0, 0).createFromHTML(divhtml);
        let style_input = `"
        padding: 2px;
        background: #f0f0f0;
        font-size: 13px;
        font-style: italic;
        font-family: Arial, Helvetica, sans-serif;
        height: 16px;
        width: 155px;
        border: 1px solid #292929;
        border-radius: 4px;
        position: relative;
        left: 10%;
        top: 35.5%;
        z-index: 1;"`;
        let name_input_html = `<input type="text" id="pf_nameinput" placeholder="Enter your name" maxlength="12" style=${style_input}/>`;
        this.name_input_p = this.add.dom(_4box.scale.width / 2, _4box.scale.height / 2).createFromHTML(name_input_html);
        nameinput = document.getElementById('pf_nameinput');
        document.getElementById('div_profile').appendChild(nameinput);

        //change name with ENTER
        this.name_input_p.addListener('keydown')
            .on('keydown', event => {
                if (document.activeElement === nameinput && event.key === 'Enter') {
                    this.sendNameChange();
                }
            });

        let style_preview = `"
        font-weight: bold;
        color: ${player.color};
        font-family: Arial, Helvetica, sans-serif;
        position: relative;
        font-size: 13px;
        left: 15%;
        top: 35.5%;
        z-index: 1;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;"`;
        let name_previewHTML = `<span id="name_preview" style=${style_preview}>${player.name}</span>`;
        this.name_preview = this.add.dom(_4box.scale.width / 2, _4box.scale.height / 2).createFromHTML(name_previewHTML);
        namepreview = document.getElementById('name_preview');
        document.getElementById('div_profile').appendChild(namepreview);
        this.texture_swatch = this.textures.get('swatch')
            .getSourceImage();

        this.swatchData = this.textures.createCanvas('_swatch', this.texture_swatch.width, this.texture_swatch.height)
            .draw(0, 0, this.texture_swatch);

        this.swatch = this.add.image(0, (_4box.scale.height * 0.08), 'swatch')
            .setInteractive()
            .on('pointerdown', this.changeColor, this)
            .on('pointermove', this.updateColor, this);
        this.circle = this.add.image(0, 0, 'circle')
            .setDepth(1)
            .setVisible(false);

        this.closebutton = this.add.image((_4box.scale.width * 0.11), (_4box.scale.height * 0.18), 'close')
            .setInteractive()
            .on('pointerover', () => { this.closebutton.setTexture('close_white') })
            .on('pointerout', () => { this.closebutton.setTexture('close') })
            .on('pointerdown', () => {
                if (this.input.activePointer.button == 0) {
                    this.closeSettings();
                }
            });

        this.okbutton = this.add.image((_4box.scale.width * 0.12), -(_4box.scale.height * 0.05), 'ok')
            .setInteractive()
            .on('pointerover', () => { this.okbutton.setTexture('ok_white') })
            .on('pointerout', () => { this.okbutton.setTexture('ok') })
            //change name with click
            .on('pointerdown', () => {
                if (this.input.activePointer.button == 0) {
                    this.sendNameChange();
                }
            });

        this.errormessage = this.add.text(-_4box.scale.width * 0.05, -_4box.scale.height * 0.03, "", { fontStyle: "bold", fontFamily: "Arial, Helvetica, sans-serif", color: "red", fontSize: "13px" })
            .setVisible(false);

        nameinput.addEventListener("input", () => {
            namepreview.innerHTML = nameinput.value.trim();
        });


        //add stuff to container 
        profile_container.add([this.settings, this.errormessage, this.okbutton, this.closebutton, this.swatch, profile]);

        //hiding profile
        //document.getElementById('div_profile').toggleAttribute('hidden', true);


        //socket events start
        socket.on('namechange', (newname, newColor) => {
            document.getElementById('name').innerHTML = newname;
            document.getElementById('name').style.color = newColor;
            namepreview.innerHTML = newname;
            player.setName(newname);
            player.setColor(newColor);
            document.cookie = `name=${newname}`;
            document.cookie = `color=${newColor}`;
            this.errormessage.setText("")
                .setVisible(false);
            this.closeSettings();
        });

        socket.on('name_exists', (newname, newColor) => {
            this.errormessage.setText("This name is already being used.")
                .setVisible(true);
        });

        socket.on("joined", (chatmessages) => {
            document.getElementById('name_preview').style.color = player.color;
        });
        //socket events end

        //close scene
        this.input.keyboard.on('keydown-ESC', event => {
            this.closeSettings();
        });


        //resize listener
        window.addEventListener('resize', event => {
            //reset positions
            profile_container.setPosition(_4box.scale.width / 2, _4box.scale.height / 2);
            this.circle.setVisible(false);
            for (let i = 0; i < sizes.length; i++) {
                if (_4box.canvas.height - (ih * sizes[i]) < (_4box.canvas.height * 0.40) || _4box.canvas.width - (iw * sizes[i]) < (_4box.canvas.width * 0.65)) {
                    profile_container.setScale(sizes[i]);
                } else {
                    break;
                }
            }
        });
    }

    changeColor(pointer, x, y, event) {
        if (pointer.button == 0 || pointer.button == 2) {
            this.swatchData.getPixel(x, y, this.color);
            this.circle.setVisible(true)
                .setPosition(pointer.x, pointer.y);
            player.setColor(this.color.rgba);
            namepreview.style.color = player.color;
            event.stopPropagation();
        }
    }

    updateColor(pointer, x, y, event) {
        if (pointer.isDown && (pointer.button == 0 || pointer.button == 2)) {
            this.swatchData.getPixel(x, y, this.color);
            this.circle.setVisible(true)
                .setPosition(pointer.x, pointer.y);
            player.setColor(this.color.rgba);
            namepreview.style.color = player.color;
            event.stopPropagation();
        }
    }

    openSettings() {
        this.isOpen = true;
        profile_container.setVisible(true);
        this.scene.get('chat').chatinput.toggleAttribute('disabled', true);
        dws.dws_container.setVisible(false);
    }

    closeSettings() {
        this.isOpen = false;
        profile_container.setVisible(false);
        this.scene.get('chat').chatinput.toggleAttribute('disabled', false);
        dws.dws_container.setVisible(true);
    }

    sendNameChange() {
        if (nameinput.value.trim() != "") {
            socket.emit('namechange', nameinput.value.trim(), player.color, player.room);
        } else {
            socket.emit('namechange', player.name, player.color, player.room);
        }
    }
}
