/*
    File: Explosion.ts
    Author: Samuel Halloran
    Website: Meme Wars
    Description: This class manages individual explosions and requred sounds and animations

    Revision: 1.0
    Last Modified By: Samuel Halloran
    Date Last Modified: December 07, 2014
*/


class Explosion extends createjs.Sprite{
    private animationEnded: boolean = false;

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
