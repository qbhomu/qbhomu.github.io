import Phaser from 'phaser'
import { io } from "socket.io-client";
import { _4box, gameroom } from './4box.js';
import { player } from './playervars.js';
const Client = {};
const socket = io.connect("http://192.168.0.104:3000");
// socket.on("connect", async () => {
//     socket.emit("join", "room");
// });

Client.sendTest = function () {
    console.log("test sent");
    socket.emit('test');
};

socket.on("joined", (chatmessages,  gameId) => {
    let name = getCookie("name");
    console.log(name)
    let room = getCookie("room");
    let avatar = getCookie("avatar");
    let cookiecolor = getCookie("color");
    if (room === gameroom) {
        socket.emit('checkroom', room, name);
    }
    if (avatar != "") {
        socket.emit('rcdavatar', room, avatar);
    }
    if (name != "") {
        player.setName(name);
        player.setColor(cookiecolor);
    } else {
        var img = document.createElement("img");
        var img_canvas = document.createElement("canvas");
        img_canvas.hidden = true;
        img.hidden = true;
        //document.body.appendChild(img);
        //document.body.appendChild(img_canvas);
        img.src = "../assets/profile/swatch.png";
        img.onload = () => {
            img_canvas.width = img.width;
            img_canvas.height = img.height;
            img_canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
            let pixelx = Math.floor(Math.random() * (332 - 0 + 1) + 0);
            let pixely = Math.floor(Math.random() * (153 - 0 + 1) + 0);
            var pixelData = img_canvas.getContext('2d').getImageData(pixelx, pixely, 1, 1).data;
            var color = `rgba(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]}, ${pixelData[3]})`;
            document.cookie = `color=${color};`
            player.setColor(color);
            document.getElementById('name').innerHTML  = `<span style="color:${player.color}; font-weight: bold;">${player.name}</span>`;
            img_canvas.remove;
            img.remove;
        };
    }
    player.setID(socket.id);
    document.cookie = "SameSite=Lax"
    document.cookie = `id=${socket.id};`
    document.cookie = `room=${gameId};`
    document.cookie = `name=${player.name};`
});

socket.on("is_sameroom", (room) => {
 //if 
});

function getCookie(_cookie) {
    let cookie = _cookie + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cookie) == 0) {
            return c.substring(cookie.length, c.length);
        }
    }
    return "";
};

export { Client, socket };