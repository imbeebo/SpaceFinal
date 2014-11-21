﻿/// <reference path="../managers/assets.ts" />

/*
File: Enemy.ts
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
    // Enemy class
    export class Enemy extends objects.Powerup {
        // public variable
        health: number = 100;
        asteroidC: createjs.Container;
        // constructor for the enemy
        constructor(x: number, y: number, name: string, stage: createjs.Stage, asteroidC: createjs.Container) {
            super(x, y, name, stage);
            this.asteroidC = asteroidC;
            this.arrayNums = [0,1,2,3];
            this.weight = [0.4, 0.3, 0.2, 0.1];
            // set up the stage and game container

            // randomly select enemy from the atlas
            var newEnemy = this.chooseFromList();
            // create a new sprite with the image; set up the height and width, registration points and the coordinates 
            this.gotoAndStop(newEnemy);
            this.regX = this.getBounds().width *.5;
            this.regY = this.getBounds().height * .5;
            this.name = 'enemy';
            // call the reset function
            this.reset(x);
        }
        // set the forward velocity, angle velocity and rotation amount to a random value
        private forwardVelocity = rand(150, 300);
        private angleVelocity = rand(-30, 30);
        private rotationAmount = rand(-3, 3);
        // move the enemy
        tick(ds: number) {
            // rotate the enemy
            this.rotation += this.rotationAmount;
            // move the enemy forward
            this.x -= ds * this.forwardVelocity;
            // move the enemy on an angle
            this.y += ds * this.angleVelocity;
        }  
        // Destroy the enemy
        destroy() {
            // set up an explosion animation for the enemy
            var asteroidExplode = new createjs.Sprite(managers.Assets.atlas, "asteroid_explosion");
            asteroidExplode.x = this.x - (this.getBounds().width * .5);
            asteroidExplode.y = this.y - (this.getBounds().height * .5);
            asteroidExplode.name = 'explode';
            asteroidExplode.play();
            // play an explosion sound
            createjs.Sound.play("asteroidExplosion");
            asteroidExplosions.push(asteroidExplode);
            this.asteroidC.addChild(asteroidExplode);
            // set the health to 0 so it will be removed from the array on the next array check
            this.health = 0;
            // update the scoreboard, passing the x location of the enemy as the score
            scoreBoard.update(Math.floor(this.x));
            // add the explosion to the game container and update the stage.
        }
        // damage the enemy
        damage() {
            // remove 15 health
            this.health -= 25;
        }

    }
} 