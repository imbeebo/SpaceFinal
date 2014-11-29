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
        private over: number;
        private out: number;
        
        // constructor for the buttom
        constructor(x:number,y:number, over = 1, out = 0) {
            super(x,y,'button');
            // set the frame for the button

            this.over = over;
            this.out = out;

            this.gotoAndStop(this.out);
        }
        overBtn() {
            this.gotoAndStop(this.over);
        }
        outBtn() {
            this.gotoAndStop(this.out);
        }
        setCustomSpriteSheetIndices(over: number, out: number) {
            this.over = over;
            this.out = out;
        }
    }
}  