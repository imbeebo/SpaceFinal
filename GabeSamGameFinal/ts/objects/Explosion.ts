class Explosion extends createjs.Sprite{
    public animationEnded: boolean = false;

    constructor(spriteSheetReference:string, x:number, y:number) {
        super(managers.Assets.atlas, spriteSheetReference);

        this.x = x;
        this.y = y;
        this.name = 'explode';
        this.framerate = 60;
        this.play();

        createjs.Sound.play("explosion");

        this.on("animationend", function (e) {
            this.animationEnded = true;
        });
    }
}
