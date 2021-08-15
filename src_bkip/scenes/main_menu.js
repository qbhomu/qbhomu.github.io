import Phaser from 'phaser'
import { Client, socket } from '../Client.js';
import { _4box } from '../4box.js'
var sizes = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0];
var bg;
export default class Main_Menu extends Phaser.Scene {
    constructor() {
        super({ key: 'main_menu', active: true });
    }

    preload() {
        this.load.image('background', 'assets/menu/sneed.png')
    }

    create() {
        bg = this.add.image(0, _4box.scale.height, 'background');
        for (let i = 0; i < sizes.length; i++) {
            if ((_4box.canvas.height) - (bg.height * sizes[i]) < ((_4box.canvas.height) * 0.35) || (_4box.canvas.width) - (bg.width* sizes[i]) < ((_4box.canvas.width) * 0.63)) {
                bg.setScale(sizes[i]);
                bg.setPosition((bg.width* sizes[i])/2, _4box.scale.height - ((bg.height * sizes[i])/2));
            } else {
                break;
            }
        }
        window.addEventListener('resize', onResize);
        function onResize(){
            for (let i = 0; i < sizes.length; i++) {
                if ((_4box.canvas.height) - (bg.height * sizes[i]) < ((_4box.canvas.height) * 0.35) || (_4box.canvas.width) - (bg.width* sizes[i]) < ((_4box.canvas.width) * 0.63)) {
                    bg.setScale(sizes[i]);
                    bg.setPosition((bg.width* sizes[i])/2, _4box.scale.height - ((bg.height * sizes[i])/2));
                } else {
                    break;
                }
            }
        }
        this.scale.fullscreenTarget = document.getElementById('_4box');
        var fullscreen = this.add.text(100, 200, "", { backgroundColor: "#21313CDD", color: "#26924F", padding: 10, fontStyle: "bold" })
        .setSize(100, 100)
        .setText("fullscreen")
        .setInteractive()
        .on('pointerdown', () => {
            if (this.scale.isFullscreen) {
                this.scale.stopFullscreen();
            } else {
                this.scale.startFullscreen();
            }
        });
    }
}
