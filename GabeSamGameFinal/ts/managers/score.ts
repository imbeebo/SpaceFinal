/*
File: score.ts
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

module managers {
    // Score Class
    export class scoreboard {
        // private variables
        private lives: number = 100;
        private scoreText: createjs.Text;
        private livesText: createjs.Text;
        private game: createjs.Container;
        private scoreMultiplier = 1;
        private oldScore: number;

        // constructor for the scoreboard
        constructor(game: createjs.Container) {
            // set up the game container and create the score and lives text
            this.game = game;
            this.scoreText = new createjs.Text('', 'bold 15px Segoe UI', '#FFFFFF');
            this.livesText = new createjs.Text('', 'bold 15px Segoe UI', '#FFFFFF');
            // set the text and container location for the score
            this.scoreText.text = "Score: " + gameScore + ' x' + this.scoreMultiplier;
            this.scoreText.x = 15;
            this.scoreText.y = 15;
            this.scoreText.name = 'score';
            // set the text and container location for the lives
            this.livesText.x = 15;
            this.livesText.y = 30;
            this.livesText.name = 'lives';
            this.livesText.text = "Lives: " + this.lives;
            // add the text to the container
            this.game.addChild(this.scoreText, this.livesText);
        }
        // update the score based on how close the asteroid is.
        update(distance: number) {

            if (distance < 5000&&this.scoreMultiplier<=2) {

                gameScore += (distance*this.scoreMultiplier);

                if ((gameScore - this.oldScore) > 5000) {
                    gameScore = 0;
                }
                this.oldScore = gameScore;
            }

            // update the score text
            this.scoreText.text = "Score: " + gameScore+' x'+this.scoreMultiplier;
        }
        // lose a life :(
        loseLife(crash: boolean): boolean {
            if (crash) {
                this.lives -= 25;
            }
            else {
                this.lives -= 5;
            }
            // update the lives text
            this.livesText.text = "Lives: " + this.lives;
            // if dead, return true
            if (this.lives <= 0) {
                return true;
            }
            // else, keep playing!
            else {
                return false;
            }
        }
        changeMulti(n: number) {
            this.scoreMultiplier = n;
            this.scoreText.text = "Score: " + gameScore + ' x' + this.scoreMultiplier;
        }
        resetMulti() {
            this.scoreMultiplier = 1;
            this.scoreText.text = "Score: " + gameScore + ' x' + this.scoreMultiplier;
            
        }
        getMulti(): number {
            return this.scoreMultiplier;
        }

        giveLife() {
            this.lives += 1;
            this.livesText.text = "Lives: " + this.lives;
        }
        // reset the lives to 3
        reset() {
            this.lives = 3;
            this.livesText.text = "Lives: " + this.lives;
        }
    }
}   