///// <reference path="../scripts/typings/createjs/createjs.d.ts" />
///// <reference path="../Scripts/typings/easeljs/easeljs.d.ts"/>

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
    public setBackgroundSpeed(speed: number) {
        this.backgroundSpeed = speed;
    }
}




//// background image
//var stars = 6000;
//var canvasWidth = 1920;
//var canvasHeight = 1080;

//var starSmallRadiusMin = 1;
//var starSmallRadiusVarience = 2;
//var starBigRadiusMin = 3;
//var starBigRadiusVarience = 6;
//var starBigChance = 0.055;
//class Background extends createjs.Shape {
//    // private variable

//    private canvas: HTMLCanvasElement;
//    //private stage: createjs.Stage;

//    // constructor for the background image
//    constructor(canvas: HTMLCanvasElement) {
//        super(new createjs.Graphics());
//        // fill the class with the background image
//        this.canvas = canvas;
//        //this.stage = new createjs.Stage(canvas);

//        //createjs.Ticker.on('tick', (e2: createjs.TickerEvent) => { this.ticker(e2) });
//        this.graphics.beginFill("#000").drawRect(0, 0, 1920, 1080);
//        for (var i = 0; i < stars; i++) {
//            var mX = Math.floor(Math.random() * canvasWidth);
//            var mY = Math.floor(Math.random() * canvasHeight);

//            var bigStar = Math.random();
//            var radius;

//            if (bigStar < starBigChance) {
//                radius = starBigRadiusMin + (Math.random() * starBigRadiusVarience)
//            }
//            else {
//                radius = starSmallRadiusMin + (Math.random() * starSmallRadiusVarience);
//            }

//            var colour, colourType = Math.round(Math.random() * 5);
//            switch (colourType) {
//                case 0: colour = "#558"; break;
//                case 1: colour = "#fff"; break;
//                case 2: colour = "#aaa"; break;
//                case 3: colour = "#888"; break;
//                case 4: colour = "#855"; break;
//                case 5: colour = "#585"; break;
//            }

//            this.graphics.beginFill(colour)
//                .drawPolyStar(
//                Math.random() * canvasWidth,
//                Math.random() * canvasHeight,
//                radius,
//                5 + Math.round(Math.random() * 2), // number of sides
//                0.9, // pointyness
//                Math.random() * 360 // rotation of the star
//                );
            
//        }

//        //this.stage.addChild(this);
//    }        
//    //// move the background image.
//    //public tick(ds: number) {        
//    //    this.x = (this.x - ds * 150) % 700;
        
//    //}
//    //private ticker(e: createjs.TickerEvent) {
//    //    var ds = e.delta / 1000;
//    //    this.tick(ds);
//    //    this.stage.update();
//    //}
//}

