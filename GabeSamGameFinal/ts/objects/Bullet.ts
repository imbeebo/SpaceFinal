/*
    File: Bullet.ts
    Author: Gabriel Hounsome & Sam Halloran
    Website: Meme Wars
    Description: This is a side-scroller shooter game 
    where the player must shoot oncoming memes. Avoid being hit or shot by them. 
    There are powerups to help you get through the levels
    Date: December 11, 2014

    Citations: Used JQuery, collsion detection module from indiegamer and royalty free art from: wrathgames.com
    Royalty Free Music: royalty free music from: http://www.looperman.com/media/loops/630386/looperman-l-0630386-0077610-mrfunktastic-trap-gods-bells-140f.mp3
*/

// bullet class
class Bullet extends createjs.Text {
    // variables
    creationTime: number = 0;
    bulletRotation: number;          
    character: string;
    playerShot: boolean;
    private dogeMemes = ["so destroy", "very violence", "much fight", "very wow",
        "very mlg", "wow", "much coin", "very doge",
        "many side scroller", "much wow", "so advanced web", "much cool",
        "many premium", "such doge"];
    private ermahgerdMemes = ["ERMAHGERD!", "GERSBERMPS!", "ERMAHGERDON!", "ERTS DURGE!",
        "MER BERLERTS!", "BURNG BURNG!", "GERT DURGE!"];
    // constructor for the bullet
    constructor(stage: createjs.Stage, character: string, playerShot: boolean, bulletRotation?: number, shooter?: createjs.Sprite) {


        super("", "", "#d3d3d3")

        this.creationTime = createjs.Ticker.getTime(true);
        this.playerShot = playerShot;
        this.character = character;
        if (this.character == "doge" || this.character == "dogePlayer") {
            this.font = "Bold 15px Comic Sans MS";
            var randomNum = rand(0, this.dogeMemes.length - 1);
            this.text = this.dogeMemes[randomNum];
            this.regX = (this.dogeMemes[randomNum].length * 7) * .5;
            this.regY = 10 * 1.5;    
            // create a sound for the bullets
            createjs.Sound.play("dogeBark");
        }
        else {
            this.font = "Bold 15px Arial";
            var randomNum = rand(0, this.ermahgerdMemes.length - 1);
            this.text = this.ermahgerdMemes[randomNum];
            this.regX = (this.ermahgerdMemes[randomNum].length * 7) * .5;
            this.regY = 10 * 1.5;
            // create a sound for the bullets
            createjs.Sound.play("ermahgerdShoot");
        }
        this.rotation = bulletRotation + 90;
        this.bulletRotation = bulletRotation;
        if (this.playerShot) {
            // set where the bullet is.

            this.x = shooter.x;
            this.y = shooter.y;
        }
        else {
            this.x = shooter.x;
            var shootLoc= rand(shooter.y - shooter.regY, shooter.y + shooter.regY);
            this.y = shootLoc;
            //this.rotation = 90;
        }
        this.on('tick', (e2: createjs.TickerEvent) => { this.tick() });
        
        this.name = 'bullet';
    } 
    // move the bullet
    public tick() {   
        if (this.playerShot) {
            this.x += 5 * Math.cos(-this.bulletRotation / 180 * Math.PI);
        }
        else {
            //this.x -= ds * 450;
            this.x += 6 * Math.cos(this.bulletRotation / 180 * Math.PI);
            this.y += 6 * Math.sin(this.bulletRotation / 180 * Math.PI);
        }
        if (this.creationTime + 6000 < createjs.Ticker.getTime(true)) {
            bullets.splice(bullets.indexOf(this), 1);
            bulletContainer.removeChild(this);
        }
    }
    // return if it is a player bullet
    public playerBullet() {
        return this.playerShot;
    }
} 