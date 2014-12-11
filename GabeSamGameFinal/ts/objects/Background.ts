///// <reference path="../scripts/typings/createjs/createjs.d.ts" />
///// <reference path="../Scripts/typings/easeljs/easeljs.d.ts"/>

/*
    File: Background.ts
    Author: Gabriel Hounsome & Sam Halloran
    Website: Meme Wars
    Description: This is a side-scroller shooter game 
    where the player must shoot oncoming memes. Avoid being hit or shot by them. 
    There are powerups to help you get through the levels
    Date: December 11, 2014

    Citations: Used JQuery, collsion detection module from indiegamer and royalty free art from: wrathgames.com
    Royalty Free Music: royalty free music from: http://www.looperman.com/media/loops/630386/looperman-l-0630386-0077610-mrfunktastic-trap-gods-bells-140f.mp3
*/
// background class
class Background extends createjs.Shape {
    // private variable
    private img: HTMLImageElement;
    private backgroundSpeed: number;
    // constructor for the background image
    constructor(img: HTMLImageElement, canvas: HTMLCanvasElement) {
        super(new createjs.Graphics());
        // fill the class with the background image
        this.graphics.beginBitmapFill(img);
        this.graphics.drawRect(0, 0, canvas.width + img.width, img.height);
        this.img = img;
        this.name = 'background';
    }
    // move the background image.
    public tick(ds: number) {
        this.x = (this.x - ds * this.backgroundSpeed) % this.img.width;
    }
    // set the background speed
    public setBackgroundSpeed(speed: number) {
        this.backgroundSpeed = speed;
    }
}