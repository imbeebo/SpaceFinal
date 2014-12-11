/*
    File: Explosion.ts
    Author: Gabriel Hounsome & Sam Halloran
    Website: Meme Wars
    Description: This is a side-scroller shooter game 
    where the player must shoot oncoming memes. Avoid being hit or shot by them. 
    There are powerups to help you get through the levels
    Date: December 11, 2014

    Citations: Used JQuery, collsion detection module from indiegamer and royalty free art from: wrathgames.com
    Royalty Free Music: royalty free music from: http://www.looperman.com/media/loops/630386/looperman-l-0630386-0077610-mrfunktastic-trap-gods-bells-140f.mp3
*/

// explosion class
class Explosion extends createjs.Sprite{
    private animationEnded: boolean = false;
    // constructor for explosion
    constructor(spriteSheetReference:string, soundReference:string, x:number, y:number) {
        super(managers.Assets.atlas, spriteSheetReference);

        this.x = x;
        this.y = y;
        this.name = 'explode';
        this.framerate = 60;
        this.play();

        //play required sounds
        createjs.Sound.play(soundReference);

        //animation ended, recored in variable
        this.on("animationend", function (e) {
            this.animationEnded = true;
        });
    }

    //check if animation has ended
    public getAnimationEnded() {
        return this.animationEnded;
    }
}
