/*
    File: Button.ts
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
            // set the registration point and the coordinates
            this.regX = this.getBounds().width * .5;
            this.regY = this.getBounds().height * .5;
        }
        // cause button over effect
        overBtn() {
            this.gotoAndStop(this.over);
        }
        // cause button off effect
        outBtn() {
            this.gotoAndStop(this.out);
        }
        // set sprite stuff
        setCustomSpriteSheetIndices(over: number, out: number) {
            this.over = over;
            this.out = out;
        }
    }
}  