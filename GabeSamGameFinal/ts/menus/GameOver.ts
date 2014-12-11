/*
    File: GameOver.ts
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
    export class GameOver extends GameMenu {
        // private variables


        // constructor for the scoreboard
        constructor(message: createjs.Text, canvas: HTMLCanvasElement, mainGame: Main, game: createjs.Container) {
            super();
            game.removeAllChildren();
            var backBtn = new objects.Button(100,50);
            backBtn.on("click", (e: createjs.Event) => { currentMenu = new menus.FrontMenu(canvas, mainGame, message, game)});
            backBtn.on("mouseover", function () { backBtn.overBtn() });
            backBtn.on("mouseout", function () { backBtn.outBtn() });
            backBtn.cursor = "pointer";
            var backBtnText = new createjs.Text('Main Menu', 'bold 15px Segoe UI', '#e66000');
            backBtnText.x = backBtn.x - 40;
            backBtnText.y = backBtn.y-10;
            backBtnText.on("click", (e: createjs.Event) => { currentMenu = new menus.FrontMenu(canvas, mainGame, message, game) });
            backBtnText.on("mouseover", function () { backBtn.overBtn() });
            backBtnText.on("mouseout", function () { backBtn.outBtn() });
            backBtnText.cursor = "pointer";
            message.text = "Game Over! Your final score is: " + gameScore;
            this.addChild(backBtn, backBtnText, message);
        }
    }
}