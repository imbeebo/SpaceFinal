/*
    File: Ship.ts
    Author: Gabriel Hounsome & Sam Halloran
    Website: Meme Wars
    Description: This is a side-scroller shooter game 
    where the player must shoot oncoming memes. Avoid being hit or shot by them. 
    There are powerups to help you get through the levels
    Date: December 11, 2014

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
                createjs.Tween.get(this).to({ x: this.stage.mouseX, y: this.stage.mouseY }, 150, createjs.Ease.sineIn);
        }
        // get the ship rotation amount
        getShipRotation() {
            return this.rotation;
        }
    }
} 