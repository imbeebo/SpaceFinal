module menus {
    // Score Class
    export class HighScores extends createjs.Container {
        // private variables


        // constructor for the scoreboard
        constructor(message: createjs.Text, canvas: HTMLCanvasElement, mainGame: Main, game: createjs.Container) {
            super();
            currentMenu.removeAllChildren();
            var backBtn = new objects.Button(100, 30);
            backBtn.on("click", (e: createjs.Event) => { currentMenu = new menus.FrontMenu(canvas, mainGame, message, game) });
            backBtn.on("mouseover", function () { backBtn.overBtn() });
            backBtn.on("mouseout", function () { backBtn.outBtn() });
            backBtn.cursor = "pointer";
            var backBtnText = new createjs.Text('Back', 'bold 15px Segoe UI', '#e66000');
            backBtnText.on("click", (e: createjs.Event) => { currentMenu = new menus.FrontMenu(canvas, mainGame, message, game) });
            backBtnText.on("mouseover", function () { backBtn.overBtn() });
            backBtnText.on("mouseout", function () { backBtn.outBtn() });
            backBtnText.cursor = "pointer";
            backBtnText.x = backBtn.x - 20;
            backBtnText.y = backBtn.y;
            // get the high score form and display it.
            var highScoreForm = new createjs.DOMElement(createHighScoreBoard());
            highScoreForm.x = canvas.width * .5 - 150;
            highScoreForm.y = canvas.height * .5 - 150;
            game.addChild(this);
        }
    }
} 