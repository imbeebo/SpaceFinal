﻿/*
File: Button.ts
Author: Gabriel Hounsome
Website: Crazy Comets
Description: This is a side-scroller shooter game 
where the player must shoot oncoming asteroids and 
pickup powerups

Revision: 1.0
Last Modified By: Gabriel Hounsome
Date Last Modified: November 07, 2014

Citations: Used JQuery, collsion detection module from indiegamer and royalty free art from: wrathgames.com
Royalty Free Music: royalty free music from: http://www.looperman.com/media/loops/630386/looperman-l-0630386-0077610-mrfunktastic-trap-gods-bells-140f.mp3
*/

module objects {
    // Button Class
    export class Object extends createjs.Sprite {
        // constructor for the bullet
        constructor(x: number, y: number, name: string) {
            super(managers.Assets.atlas);
            // set the registration point and the coordinates
            this.regX = this.getBounds().width * .5;
            this.regY = this.getBounds().height * .5;
            this.x = x;
            this.y = y;
            this.name = name;
        }
    }
}   