module menus {
    // Score Class
    export class ShowInstructions extends GameMenu {
        // private variables


        // constructor for the scoreboard
        constructor(message: createjs.Text, canvas: HTMLCanvasElement, mainGame: Main, game: createjs.Container) {
            super();
            currentMenu.removeAllChildren();
            game.removeAllChildren();
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
            backBtnText.y = backBtn.y - 10;
            // create the instructions message
            message = new createjs.Text('', 'bold 30px Segoe UI', '#ffffff');
            message.font = 'bold 15px Segoe UI';
            message.lineWidth = canvas.width * .5;
            message.x = canvas.width * .5;
            message.y = 60;
            message.textAlign = 'center';
            message.text = "Use the mouse to move the ship around the screen. "
            + "Left click to shoot the Asteroids before they hit you (Careful, it takes more than one "
            + "shot to kill them. If the mouse leaves the game area, you will lose control of the ship. "
            + "Destroy as many asteroids as you can to boost your score. Pick up the powerups for perks.";
            this.addChild(backBtn, backBtnText, message);
            game.addChild(this);
        }
    }
} 