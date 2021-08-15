import { Client, socket } from './Client.js';
import { _4box } from './4box.js';

export var player = {
    name: "Anon",
    avatar: "null",
    color: "",
    is_host: false,
    is_audience: false,
    slot: 0,
    ID: 0,
    room: "",
    game: "",
    setGame: function(game) {
        this.game = game;
    },
    setColor: function(color) {
        this.color = color;
    },
    setName: function(name) {
        this.name = name;
    },
    setID: function(ID) {
        this.ID = ID;
    },
    setRoom: function(room) {
        this.room = room;
    },
    setAvatar: function(avatar) {
        this.avatar = avatar;
    }
};
 