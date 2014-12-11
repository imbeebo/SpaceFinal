/*
    File: HighScores.ts
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
    export class HighScores extends GameMenu {

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
            backBtnText.y = backBtn.y-10;
            // get the high score form and display it.
            var highScoreForm = new createjs.DOMElement(createHighScoreBoard());
            highScoreForm.x = canvas.width * .5-150;
            highScoreForm.y = canvas.height * .5 - 150;
            this.addChild(backBtn, backBtnText, highScoreForm);
            game.addChild(this);
        }
    }
} 