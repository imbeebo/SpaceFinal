﻿/*
    File: Enemy.ts
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
    // Enemy class
    export class Enemy extends objects.Powerup {
        // public variable
        health: number = 100;
        enemyC: createjs.Container;
        shootInterval: number;
        shootOldTime: number = -1500;
        // constructor for the enemy
        constructor(x: number, y: number, name: string, stage: createjs.Stage, enemyC: createjs.Container, health: number) {
            super(x, y, name, stage);
            this.enemyC = enemyC;
            this.name = enemyCharacter;
            this.health = health;
            // create a new sprite with the image; set up the height and width, registration points and the coordinates 
            this.gotoAndStop(enemyCharacter);
            this.regX = this.getBounds().width *.5;
            this.regY = this.getBounds().height * .5;
            this.shootInterval = rand(900, 3000);
            // call the reset function
            this.reset(x);
        }
        // make the enemy shoot
        private enemyShoot() {

            var angle = rand(-200, -160);
            var bulletL = new Bullet(this.stage, this.name, false, angle, this);
            bullets.push(bulletL);
            bulletContainer.addChild(bulletL);
        }
        // set the forward velocity, angle velocity and rotation amount to a random value
        private forwardVelocity = rand(200, 300);
        private angleVelocity = rand(-30, 30);
        private rotationAmount = rand(-3, 3);
        // move the enemy
        tick(ds: number) {
            if (createjs.Ticker.getTime(true) >= this.shootOldTime + this.shootInterval) {
                this.enemyShoot();
                this.shootOldTime = createjs.Ticker.getTime(true);
            }
            // rotate the enemy
            this.rotation += this.rotationAmount;
            // move the enemy forward
            this.x -= ds * this.forwardVelocity;
            // move the enemy on an angle
            this.y += ds * this.angleVelocity;
        }  
        // stop the enemy from shooting
        stopEnemyShooting() {
            window.clearInterval(this.shootInterval);
        }
        // Destroy the enemy
        destroy() {
            window.clearInterval(this.shootInterval);
            // set up an explosion animation for the enemy
            var enemyExplode = new Explosion("asteroid_explosion", "asteroidExplosion", this.x - (this.getBounds().width * .5), this.y - (this.getBounds().height * .5));

            asteroidExplosions.push(enemyExplode);
            this.enemyC.addChild(enemyExplode);
            // set the health to 0 so it will be removed from the array on the next array check
            this.health = 0;
            // update the scoreboard, passing the x location of the enemy as the score
            scoreBoard.update(Math.floor(this.x));
            scoreBoard.incrementEnemiesDestroyed();
            // add the explosion to the game container and update the stage.
        }
        // damage the enemy
        damage() {
            // remove 15 health
            this.health -= 25;
        }

    }
} 