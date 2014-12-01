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
class Bullet extends createjs.Text {
    // constructor for the bullet
    shipRotation: number;          
    character: string;
    playerShot: boolean;
    private dogeMemes = ["so destroy", "very violence", "much fight", "very wow",
        "very mlg", "wow", "much coin", "very doge",
        "many side scroller", "much wow", "so advanced web", "much cool",
        "many premium", "such doge"];
    private ermahgerdMemes = ["ERMAHGERD!", "GERSBERMPS!", "ERMAHGERDON!", "ERTS DURGE!",
        "MER BERLERTS!", "BURNG BURNG!", "GERT DURGE!"];
    constructor(stage: createjs.Stage, character: string, playerShot: boolean, shipRotation?: number, shooter?: createjs.Sprite) {
        super("", "", "#d3d3d3")
        this.playerShot = playerShot;
        this.character = character;
        if (this.character == "doge" || this.character == "dogePlayer") {
            this.font = "Bold 15px Comic Sans MS";
            var randomNum = rand(0, this.dogeMemes.length - 1);
            this.text = this.dogeMemes[randomNum];
            this.regX = (this.dogeMemes[randomNum].length * 7) * .5;
            this.regY = 10 * 1.5;
        }
        else {
            this.font = "Bold 15px Arial";
            var randomNum = rand(0, this.ermahgerdMemes.length - 1);
            this.text = this.ermahgerdMemes[randomNum];
            this.regX = (this.ermahgerdMemes[randomNum].length * 7) * .5;
            this.regY = 10 * 1.5;
        }



        if (this.playerShot) {
            // set where the bullet is.
            this.shipRotation = shipRotation;

            this.x = stage.mouseX;
            this.rotation = shipRotation + 90;
            this.y = stage.mouseY;
        }
        else {
            this.x = shooter.x;
            var shootLoc= rand(shooter.y - shooter.regY, shooter.y + shooter.regY);
            this.y = shootLoc;
            //this.rotation = 90;
        }
        this.name = 'bullet';

        
    } 
    // move the bullet
    public tick(ds: number) {   
        if (this.playerShot) {
            this.x += 3.5 * Math.cos(-this.shipRotation / 180 * Math.PI);
        }
        else {
            this.x -= ds * 350;
        }
    }
    public playerBullet() {
        return this.playerShot;
    }
} 