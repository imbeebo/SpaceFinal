/*
    File: score.ts
    Author: Gabriel Hounsome & Sam Halloran
    Website: Meme Wars
    Description: This is a side-scroller shooter game 
    where the player must shoot oncoming memes. Avoid being hit or shot by them. 
    There are powerups to help you get through the levels
    Date: December 11, 2014

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
        private enemiesDestroyed: number=0;

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
            this.livesText.name = 'health';
            this.livesText.text = "Health: " + this.lives;
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
            this.livesText.text = "Health: " + this.lives;
            // if dead, return true
            if (this.lives <= 1) {
                return true;
            }
            // else, keep playing!
            else {
                return false;
            }
        }
        // get the amount of enemies destroyed
        getEnemiesDestroyed(): number {
            return this.enemiesDestroyed;
        }
        // increment the amount of enemies destroyed
        incrementEnemiesDestroyed() {
            this.enemiesDestroyed++;
        }
        // change the score multiplier
        changeMulti(n: number) {
            this.scoreMultiplier = n;
            this.scoreText.text = "Score: " + gameScore + ' x' + this.scoreMultiplier;
        }
        // reset the score multiplier
        resetMulti() {
            this.scoreMultiplier = 1;
            this.scoreText.text = "Score: " + gameScore + ' x' + this.scoreMultiplier;
            
        }
        // get the score multiplier
        getMulti(): number {
            return this.scoreMultiplier;
        }
        // set the life in percentage
        setLife(percentage: number) {
            this.lives = Math.round(this.lives * percentage);
            this.livesText.text = "Health: " + this.lives;
        }
        // return the amount of lives
        giveLife() {
            this.lives += 10;
            this.livesText.text = "Health: " + this.lives;
        }
        // reset the lives to 3
        reset() {
            this.lives = 3;
            this.livesText.text = "Health: " + this.lives;
        }
    }
}   