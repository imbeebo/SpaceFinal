/*
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
    export class Button extends objects.Object{
        // constructor for the bullet
        constructor(x:number,y:number) {
            super(x,y,'button');
            // set the frame for the button
            this.gotoAndStop(0);
        }
        overBtn() {
            this.gotoAndStop(1);
        }
        outBtn() {
            this.gotoAndStop(0);
        }
    }
}  