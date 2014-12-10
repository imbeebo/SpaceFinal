/*
    File: Pause.ts
    Author: Samuel Halloran
    Website: Meme Wars
    Description: This file represents all the required functionality to display a pause menu when the user pauses the game.

    Revision: 1.0
    Last Modified by: Samuel Halloran
    Last Modified Date: December 4, 2014
*/

module menus {
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

            resumeButton.on("click", (e: createjs.Event) => {
                game.removeChild(this);
                createjs.Ticker.setPaused(false);
            });

            resumeButton.on("mouseover", (e: createjs.Event) => {
                resumeButton.overBtn();
            });

            resumeButton.on("mouseout", (e: createjs.Event) => {
                resumeButton.outBtn();
            });
            resumeButtonText.on("click", (e: createjs.Event) => {
                game.removeChild(this);
                createjs.Ticker.setPaused(false);
            });

            resumeButtonText.on("mouseover", (e: createjs.Event) => {
                resumeButton.overBtn();
            });

            resumeButtonText.on("mouseout", (e: createjs.Event) => {
                resumeButton.outBtn();
            });

            mainMenuButton.on("click", (e: createjs.Event) => {
                mainGame.endGame();
                currentMenu = new menus.FrontMenu(canvas, mainGame, message, game);
                createjs.Ticker.setPaused(false);
            });

            mainMenuButton.on("mouseover", (e: createjs.Event) => {
                mainMenuButton.overBtn();
            });

            mainMenuButton.on("mouseout", (e: createjs.Event) => {
                mainMenuButton.outBtn();
            });
            mainMenuButtonText.on("click", (e: createjs.Event) => {
                mainGame.endGame();
                currentMenu = new menus.FrontMenu(canvas, mainGame, message, game);
                createjs.Ticker.setPaused(false);
            });

            mainMenuButtonText.on("mouseover", (e: createjs.Event) => {
                mainMenuButton.overBtn();
            });

            mainMenuButtonText.on("mouseout", (e: createjs.Event) => {
                mainMenuButton.outBtn();
            });

            this.addChild(resumeButton, mainMenuButton, pauseMenuText, resumeButtonText, mainMenuButtonText);
            game.addChild(this);
        }
    }
}