import { Client, socket } from './Client.js';
import Phaser from 'phaser';
import Main_Menu from './scenes/main_menu.js';
import Chat from './scenes/chat.js';
import Profile from './scenes/profile.js';
import DWS from './scenes/dws.js';
import { player } from './playervars.js';
var chat, p_4box;
var sizes = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0];
const _4box = new Phaser.Game({
    type: Phaser.AUTO,
    banner: false,
    parent: 'p_4box',
    backgroundColor: "#282828",
    scale: {
        //mode: Phaser.Scale.FIT,
        width: "100%",
        height: "100%",
    },
    dom: {
        createContainer: true
    },
    scene: [Main_Menu, Chat, Profile, DWS]
});
window.onload = () => {
    chat = document.getElementById('chat_right');
    p_4box = document.getElementById('p_4box');
    window.addEventListener('resize', event => {
        _4box.scale.resize(window.innerWidth - chat.offsetWidth, window.innerHeight);
    });
};

//_4box.canvas.id = "4box"; 
var gameroom = "room";
socket.emit("join", gameroom);
player.setGame("dws");
player.setRoom(gameroom);

socket.on('test', function () {
    window.alert('test test test');
});

export { _4box, gameroom };
