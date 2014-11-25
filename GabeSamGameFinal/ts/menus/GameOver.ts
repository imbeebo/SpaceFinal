module menus {
    // Score Class
    export class GameOver extends createjs.Container {
        // private variables


        // constructor for the scoreboard
        constructor(message: createjs.Text, canvas: HTMLCanvasElement, mainGame: Main, game: createjs.Container) {
            super();
            game.removeAllChildren();
            var backBtn = new objects.Button(100,100);
            backBtn.on("click", (e: createjs.Event) => { currentMenu = new menus.FrontMenu(canvas, mainGame, message, game)});
            backBtn.on("mouseover", function () { backBtn.overBtn() });
            backBtn.on("mouseout", function () { backBtn.outBtn() });
            backBtn.cursor = "pointer";
            var backBtnText = new createjs.Text('Main Menu', 'bold 15px Segoe UI', '#e66000');
            backBtnText.x = backBtn.x - 40;
            backBtnText.y = backBtn.y-55;
            backBtnText.on("click", (e: createjs.Event) => { currentMenu = new menus.FrontMenu(canvas, mainGame, message, game) });
            backBtnText.on("mouseover", function () { backBtn.overBtn() });
            backBtnText.on("mouseout", function () { backBtn.outBtn() });
            backBtnText.cursor = "pointer";
            message.text = "Game Over! Your final score is: " + gameScore;
            this.addChild(backBtn, backBtnText, message);
        }
    }
}