import Phaser from 'phaser'
import { Client, socket } from '../Client.js';
import { _4box } from '../4box.js';
import { player } from '../playervars.js';
var sizes = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0];
var pieces = {};
var haspiece = false;
var _canvas, ih, iw;
export default class DWS extends Phaser.Scene {
    constructor() {
        super({ key: 'dws', active: false });
    }
    preload() {
        //this.load.image('test', 'assets/dws/homumado.jpg');
    }
    create() {
        this.dws_container = this.add.container(_4box.scale.width / 2, _4box.scale.height / 2);
        var rows = 3;
        var cols = 3;
        var img = new Image();
        img.src = "../../assets/dws/hq.jpg";
        img.onload = () => {

            iw = img.width;
            ih = img.height;
            var pieceWidth = iw / cols;
            var pieceHeight = ih / rows;
            var imgDOMhtml = `<table id="imagearea" style="display: block; margin-left: auto; margin-right: auto;"></table>`;
            var canvashtml = `<div id="div_gridimg" style ="width: ${iw}px; height: ${ih}px;"></div>`;
            //this is what gets resized
            _canvas = this.add.dom(0, 0).createFromHTML(canvashtml);
            this.dws_container.add(_canvas);
            var img_DOM = this.add.dom(0, 0).createFromHTML(imgDOMhtml);
            var img_canvas = document.getElementById("imagearea");
            document.getElementById("div_gridimg").appendChild(img_canvas);
            //document.getElementById("input_parent").appendChild(document.getElementById("div_gridimg").parentNode);
            for (var y = 0; y < rows; y++) {
                //let breakdiv = document.createElement("div");
                //img_canvas.appendChild(breakdiv);
                for (var x = 0; x < cols; x++) {
                    let piece_canvas = document.createElement("canvas");
                    piece_canvas.style.border = "1px solid black";
                    piece_canvas.style.marginTop = "-8px";
                    piece_canvas.style.marginLeft = "-7px";
                    let ctx = piece_canvas.getContext("2d");
                    piece_canvas.width = iw / cols;
                    piece_canvas.height = ih / rows;

                    ctx.drawImage(
                        // from the original image
                        img,
                        // take the next x,y piece
                        x * pieceWidth, y * pieceHeight, pieceWidth, pieceHeight,
                        // draw it on canvas based on the shuffled pieces[] array
                        0, 0, pieceWidth, pieceHeight
                    );
                    let _x = x;
                    let _y = y;
                    let xy = `${String.fromCharCode(97 + _x).toUpperCase()}${_y + 1}`;
                    piece_canvas.id = xy;
                    pieces[xy] =
                    {
                        col: x,
                        row: y,
                        img: piece_canvas.toDataURL(),
                        canvas: piece_canvas,
                        taken: false
                    };
                    piece_canvas.addEventListener('click', () => {
                        if (!pieces[xy].taken) {
                            if (!haspiece) {
                                socket.emit('takeimage', xy, player.room);
                                //document.cookie = `avatar=${player.avatar};`
                            } else {
                                socket.emit("changepiece", player.room, player.avatar, xy)
                                socket.emit('takeimage', xy, player.room);
                                //document.cookie = `avatar=${player.avatar};`
                            }
                        } else {
                            console.log("alreadytaken");
                        }
                    });
                }
            }
            //end of loop

            //put pieces on table
            for (let yr = 0; yr < rows; yr++) {
                let row = img_canvas.insertRow();
                for (let xc = 0; xc < cols; xc++) {
                    let cell = row.insertCell();
                    cell.appendChild(pieces[`${String.fromCharCode(97 + xc).toUpperCase()}${yr + 1}`].canvas);
                }
            }

            //resize whole image
            for (let i = 0; i < sizes.length; i++) {
                if (_4box.canvas.height - (ih * sizes[i]) < (_4box.canvas.height / 20) || _4box.canvas.width - (iw * sizes[i]) < (_4box.canvas.width / 2.5)) {
                    _canvas.setScale(sizes[i]);
                } else {
                    break;
                }
            }

            socket.emit('dwsready', player.room);
        };;
        var forcestart = this.add.text(100, 100, "", { backgroundColor: "#21313CDD", color: "#26924F", padding: 10, fontStyle: "bold" })
            .setSize(100, 100)
            .setText("forcestart")
            .setInteractive()
            .on('pointerdown', () => {
                socket.emit("dwsstart", player.room)
            });
        socket.on("imagetake", (id) => {
            let cpiece = document.getElementById(id);
            cpiece.style.border = "2px solid red";
            pieces[id].taken = true;
            player.setAvatar(id);
            haspiece = true;
            console.log("nottaken " + id)
            //document.cookie = `avatar=${player.avatar};`
        });

        socket.on("imagetaken", (id) => {
            pieces[id].taken = true;
            let cpiece = document.getElementById(id);
            cpiece.style.border = "2px solid red";
            console.log("taken " + id)
        });

        socket.on("imageunselected", (id) => {
            pieces[id].taken = false;
            let cpiece = document.getElementById(id);
            cpiece.style.border = "1px solid black";
        });

        socket.on("dwsstart", (id) => {
            pieces[id].taken = false;
            let cpiece = document.getElementById(id);
            cpiece.style.border = "1px solid black";
        });
        window.addEventListener('resize', event => {
            _canvas.setPosition(_4box.scale.width / 2, _4box.scale.height / 2);
            for (let i = 0; i < sizes.length; i++) {
                if (_4box.canvas.height - (ih * sizes[i]) < (_4box.canvas.height * 0.10) || _4box.canvas.width - (iw * sizes[i]) < (_4box.canvas.width * 0.40)) {
                    _canvas.setScale(sizes[i]);
                } else {
                    break;
                }
            }
        });
    }
}