import Phaser from 'phaser'
import { Client, socket } from '../Client.js';
import { _4box } from '../4box.js';
import { player } from '../playervars.js';
var profile_loaded = false;
//is a game currently in progress?
var game_running = false;
var chat, profile;
export default class Chat extends Phaser.Scene {
    constructor() {
        super({ key: 'chat', active: true });
    }

    preload() {
    }

    create() {
        profile = this.scene.get('profile');
        this.chatinput = document.getElementById('chat_input');
        this.scrollbar = document.getElementById('chat-box');
        this.scrolldown = document.getElementById('scrolldown');
        this.sendbutton = document.getElementById('send');
        this.settings = document.getElementById('change');
        this.chatmsgs = document.getElementById('text');
        this.name = document.getElementById('name');
        chat = document.getElementById('chat_right');
        _4box.scale.resize(window.innerWidth - chat.offsetWidth, window.innerHeight);
        this.chatinput.addEventListener('keydown', event => {
            if (document.activeElement === this.chatinput && event.key === 'Enter') {
                this.sendMessage();
            }
        })

        this.settings.addEventListener('click', event => {
            if (!game_running) {
                console.log(profile.isOpen);
                (profile.isOpen) ? profile.closeSettings() : profile.openSettings();
            }
        });
        this.scrolldown.addEventListener('click', event => {
            this.scrollbar.scrollTop = this.scrollbar.scrollHeight;
        });
        this.sendbutton.addEventListener('click', event => {
            this.sendMessage();
        });
        socket.on("joined", (chatmessages, gameId) => {
            this.chatmsgs.insertAdjacentHTML('beforeend', chatmessages.join(''));
            this.scrollbar.scrollTop = this.scrollbar.scrollHeight;
            this.name.innerHTML = `<span style="color:${player.color}; font-weight: bold;">${player.name}</span>`
            player.setRoom(gameId);
            this.scene.launch('dws');
            // if (this.chatMessages.length > 20) {
            //     this.chatMessages.shift();
            // }
        });
        socket.on("message", (message) => {
            if (this.scrollbar.scrollHeight - this.scrollbar.scrollTop === this.scrollbar.clientHeight) {
                this.chatmsgs.insertAdjacentHTML('beforeend', message)
                this.scrollbar.scrollTop = this.scrollbar.scrollHeight;
            } else {
                this.chatmsgs.insertAdjacentHTML('beforeend', message)
            }
        });
    }


    update() {
        if (this.scrollbar.scrollHeight - this.scrollbar.scrollTop !== this.scrollbar.clientHeight) {
            this.scrolldown.toggleAttribute('hidden', false);
        } else {
            this.scrolldown.toggleAttribute('hidden', true);
        }
    }

    sendMessage() {
        if (this.chatinput.value.trim() != "") {
            if (player.game === "dws") {
                socket.emit("message", `<span style="color:${player.color}; font-weight: bold;">${player.name}</span>
                <span style="color:gray;">(${player.avatar})</span>
                <span style="font-weight: bold;">:</span> ${this.chatinput.value}<br>`, player.room)
            } else {
                socket.emit("message", `<span style="color:${player.color}; font-weight: bold;">${player.name}</span>
                <span style="font-weight: bold;">:</span> ${this.chatinput.value}<br>`, player.room)
            }

            this.chatinput.value = "";
        }
    }

}
