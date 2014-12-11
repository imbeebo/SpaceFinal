/*
    File: ShowInstructions.ts
    Author: Gabriel Hounsome & Sam Halloran
    Website: Meme Wars
    Description: This is a side-scroller shooter game 
    where the player must shoot oncoming memes. Avoid being hit or shot by them. 
    There are powerups to help you get through the levels
    Date: December 11, 2014

    Citations: Used JQuery, collsion detection module from indiegamer and royalty free art from: wrathgames.com
    Royalty Free Music: royalty free music from: http://www.looperman.com/media/loops/630386/looperman-l-0630386-0077610-mrfunktastic-trap-gods-bells-140f.mp3
*/
module menus {
    // Score Class
    export class ShowInstructions extends GameMenu {

        // constructor for the instructions
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
            message.text = "Choose between Ermahgerd or Doge. "
            + "Use the mouse to move the ship around the screen."
            + "Left click to shoot the Asteroids before they hit you (Careful, it takes more than one "
            + "shot to kill them. If the mouse leaves the game area, you will lose control of the ship. "
            + "Destroy as many enemies as you can to boost your score. Pick up the powerups for perks.";
            this.addChild(backBtn, backBtnText, message);
            game.addChild(this);
        }
    }
} 