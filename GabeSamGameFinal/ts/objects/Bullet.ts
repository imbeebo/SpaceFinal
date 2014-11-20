/*
File: Bullet.ts
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

// bullet class
class Bullet extends createjs.Bitmap {
    // constructor for the bullet
    public oldX: number;
    shipRotation: number;
    constructor(img: HTMLImageElement, rect: createjs.Rectangle, x: number, y: number, shipRotation: number) {
        super(img);
        this.sourceRect = rect;
        // set where the bullet is.
        this.shipRotation = shipRotation;
        this.x = x;
        this.rotation = shipRotation;
        this.y = y;
        this.name = 'bullet';
    }   
    // move the bullet
    public tick(ds: number) {   
        this.x += 10 * Math.cos(-this.shipRotation / 180 * Math.PI);
        this.y -= 10 * Math.sin(-this.shipRotation / 180 * Math.PI);
    }
} 