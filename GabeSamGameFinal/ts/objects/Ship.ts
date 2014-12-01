/*
File: Ship.ts
Author: Gabriel Hounsome & Sam Halloran
Website: Meme Wars
Description: This is a side-scroller shooter game 
where the player must shoot oncoming memes. Avoid being hit or shot by them. 
There are powerups to help you get through the levels

Revision: 1.0
Last Modified By: Gabriel Hounsome
Date Last Modified: November 07, 2014

Citations: Used JQuery, collsion detection module from indiegamer and royalty free art from: wrathgames.com
Royalty Free Music: royalty free music from: http://www.looperman.com/media/loops/630386/looperman-l-0630386-0077610-mrfunktastic-trap-gods-bells-140f.mp3
*/

var rotationAmount;
module objects {
    // Ship Class
    export class Ship extends Object {
        // public variables
        stage: createjs.Stage;
        game: createjs.Container;
        oldX =0;
        oldY = 0;
        // constructor for the ship
        constructor(stage: createjs.Stage, game: createjs.Container) {
            super(200, 30, "ship");
            // set up the stage and game container
            this.game = game;
            this.stage = stage;
            // set up the ship animation. Set the width and height
            this.gotoAndStop(playerCharacter);
            // set the registration points and add the ship to the stage
            this.x = 100;
            this.y = 200;

            this.regX = this.getBounds().width * .5;
            this.regY = this.getBounds().height * .5;

            this.oldX = 10;
            this.oldY = 10;
        }
        // update the ship location
        update(e: createjs.MouseEvent) {
            //var angle = Math.atan2(this.stage.mouseY - this.y, this.stage.mouseX - this.x);
            //angle = angle * (180 / Math.PI);    

            if (this.x > (this.oldX + 5) || this.stage.mouseX < (this.oldX - 5) || this.stage.mouseY > (this.oldY + 5) || this.stage.mouseY < (this.oldY - 5)) {
                //this.rotation = angle;
                this.oldX = this.stage.mouseX;
                this.oldY = this.stage.mouseY;
                //createjs.Tween.get(this).to({ x: this.stage.mouseX, y: this.stage.mouseY, rotation: angle }, 300, createjs.Ease.sineIn);
                createjs.Tween.get(this).to({ x: this.stage.mouseX, y: this.stage.mouseY }, 150, createjs.Ease.sineIn);

            }
        }
        //// destroy the ship. WARNING!! You want to avoid having this called, cause it means the game is over.
        //destroy() {
        //    this.game.removeChild(this);
        //}
        getShipRotation() {
            return this.rotation;
        }
    }
} 