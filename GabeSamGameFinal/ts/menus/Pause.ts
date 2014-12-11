/*
    File: Pause.ts
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
    // pause menu class
    export class Pause extends GameMenu {
        constructor(canvas: HTMLCanvasElement, mainGame: Main, message: createjs.Text, game: createjs.Container) {
            super();

            console.log("Pause menu opened");

            createjs.Ticker.setPaused(true);

            //generate required objects (text, buttons) required for this state
            var resumeButton = new objects.Button((canvas.width * .5) - 90, canvas.height * .5);
            var mainMenuButton = new objects.Button((canvas.width * .5) + 90, canvas.height * .5);
           
            var resumeButtonText = new createjs.Text('Resume', 'bold 15px Segoe UI', '#e66000');
            var mainMenuButtonText = new createjs.Text('Main Menu', 'bold 15px Segoe UI', '#e66000');
            var pauseMenuText = new createjs.Text('Game Paused', 'bold 25px Segoe UI', '#e66000');

            pauseMenuText.x = (canvas.width * .5) - (pauseMenuText.getBounds().width * .5);
            pauseMenuText.y = 50;

            resumeButtonText.x = resumeButton.x - 40;
            resumeButtonText.y = resumeButton.y - 10;
            mainMenuButtonText.x = mainMenuButton.x - 40;
            mainMenuButtonText.y = mainMenuButton.y - 10;
            // resume button click
            resumeButton.on("click", (e: createjs.Event) => {
                game.removeChild(this);
                createjs.Ticker.setPaused(false);
            });
            resumeButtonText.on("click", (e: createjs.Event) => {
                game.removeChild(this);
                createjs.Ticker.setPaused(false);
            });
            // resume button mouse over
            resumeButton.on("mouseover", (e: createjs.Event) => {
                resumeButton.overBtn();
            });
            resumeButtonText.on("mouseover", (e: createjs.Event) => {
                resumeButton.overBtn();
            });
            // resume button out
            resumeButton.on("mouseout", (e: createjs.Event) => {
                resumeButton.outBtn();
            });
            resumeButtonText.on("mouseout", (e: createjs.Event) => {
                resumeButton.outBtn();
            });
            // main menu button click
            mainMenuButton.on("click", (e: createjs.Event) => {
                mainGame.endGame();
                currentMenu = new menus.FrontMenu(canvas, mainGame, message, game);
                createjs.Ticker.setPaused(false);
            });
            mainMenuButtonText.on("click", (e: createjs.Event) => {
                mainGame.endGame();
                currentMenu = new menus.FrontMenu(canvas, mainGame, message, game);
                createjs.Ticker.setPaused(false);
            });
            // main menu button over
            mainMenuButton.on("mouseover", (e: createjs.Event) => {
                mainMenuButton.overBtn();
            });
            mainMenuButtonText.on("mouseover", (e: createjs.Event) => {
                mainMenuButton.overBtn();
            });
            // main menu button out
            mainMenuButton.on("mouseout", (e: createjs.Event) => {
                mainMenuButton.outBtn();
            });
            mainMenuButtonText.on("mouseout", (e: createjs.Event) => {
                mainMenuButton.outBtn();
            });
            // add the stuff to the container and game
            this.addChild(resumeButton, mainMenuButton, pauseMenuText, resumeButtonText, mainMenuButtonText);
            game.addChild(this);
        }
    }
}