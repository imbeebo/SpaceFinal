/*
    File: Object.ts
    Author: Gabriel Hounsome & Sam Halloran
    Website: Meme Wars
    Description: This is a side-scroller shooter game 
    where the player must shoot oncoming memes. Avoid being hit or shot by them. 
    There are powerups to help you get through the levels
    Date: December 11, 2014

    Citations: Used JQuery, collsion detection module from indiegamer and royalty free art from: wrathgames.com
    Royalty Free Music: royalty free music from: http://www.looperman.com/media/loops/630386/looperman-l-0630386-0077610-mrfunktastic-trap-gods-bells-140f.mp3
*/

module objects {
    // Button Class
    export class Object extends createjs.Sprite {
        // constructor for the object class
        constructor(x: number, y: number, name: string) {
            super(managers.Assets.atlas);
            
            this.x = x;
            this.y = y;
            this.name = name;
        }
    }
}   