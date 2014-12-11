///// <reference path="../scripts/typings/createjs/createjs.d.ts" />
///// <reference path="../Scripts/typings/easeljs/easeljs.d.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///*
//File: Background.ts
//Author: Gabriel Hounsome & Sam Halloran
//Website: Meme Wars
//Description: This is a side-scroller shooter game 
//where the player must shoot oncoming memes. Avoid being hit or shot by them. There are powerups to help you get through the levels
//
//Revision: 1.0
//Last Modified By: Gabriel Hounsome
//Date Last Modified: November 07, 2014
//Citations: Used JQuery, collsion detection module from indiegamer and royalty free art from: wrathgames.com
//Royalty Free Music: royalty free music from: http://www.looperman.com/media/loops/630386/looperman-l-0630386-0077610-mrfunktastic-trap-gods-bells-140f.mp3
//*/
var Background = (function (_super) {
    __extends(Background, _super);
    // constructor for the background image
    function Background(img, canvas) {
        _super.call(this, new createjs.Graphics());
        // fill the class with the background image
        this.graphics.beginBitmapFill(img);
        this.graphics.drawRect(0, 0, canvas.width + img.width, img.height);
        this.img = img;
        this.name = 'background';
    }
    // move the background image.
    Background.prototype.tick = function (ds) {
        this.x = (this.x - ds * this.backgroundSpeed) % this.img.width;
    };
    Background.prototype.setBackgroundSpeed = function (speed) {
        this.backgroundSpeed = speed;
    };
    return Background;
})(createjs.Shape);
//# sourceMappingURL=Background.js.map