/*
    File: ChoosePlayer.ts
    Author: Gabriel Hounsome & Sam Halloran
    Website: Space Doge
    Description: This file is used to generate the Choose Player game state in which the user selects their character

    Revision: 1.0
    Last Modified By: Samuel Halloran
    Date Last Modified: November 29, 2014

    Citations: Used JQuery, collsion detection module from indiegamer and royalty free art from: wrathgames.com
    Royalty Free Music: royalty free music from: http://www.looperman.com/media/loops/630386/looperman-l-0630386-0077610-mrfunktastic-trap-gods-bells-140f.mp3
*/

module menus {
    // Score Class
    export class ChoosePlayer extends createjs.Container {
        // private variables


        // constructor for the scoreboard
        constructor(canvas: HTMLCanvasElement, mainGame: Main, message: createjs.Text, game: createjs.Container) {
            super();

            //clear remaining objects from previous state
            currentMenu.removeAllChildren();
            game.removeAllChildren();

            //generate required objects (text, buttons) required for this state
            var mouseOverText = new createjs.Text('Doge', 'bold 15px Segoe UI', '#e66000');
            var selectPlayerText = new createjs.Text('Select Your Player . . .', 'bold 25px Segoe UI', '#e66000');
            var selectDogeButton = new objects.Button((canvas.width * .5) - 90, canvas.height * .5, 20, 20);
            var selectErmahgerdButton = new objects.Button((canvas.width * .5) + 90, canvas.height * .5, 21, 21);

            selectPlayerText.x = (canvas.width * .5) - (selectPlayerText.getBounds().width * .5);
            selectPlayerText.y = 50;

            mouseOverText.x = (canvas.width * .5) - (mouseOverText.getBounds().width * .5);
            mouseOverText.y = 100;

            selectDogeButton.on("click", (e: createjs.Event) => {
                playerCharacter = 'dogePlayer';
                enemyCharacter = 'ermahgerd';  
                mainGame.startGame(null);
            });

            selectDogeButton.on("mouseover", function () {
                mouseOverText.text = "Doge";
                mouseOverText.x = (canvas.width * .5) - (mouseOverText.getBounds().width * .5);
                selectDogeButton.alpha = .8;
            });

            selectDogeButton.on("mouseout", function () {
                selectDogeButton.alpha = 1;
            });

            selectErmahgerdButton.on("click", (e: createjs.Event) => {
                playerCharacter = 'ermahgerd';
                enemyCharacter = 'doge';
                mainGame.startGame(null);
            });

            selectErmahgerdButton.on("mouseover", function () {
                mouseOverText.text = "Ermahgerd";
                mouseOverText.x = (canvas.width * .5) - (mouseOverText.getBounds().width * .5);
                selectErmahgerdButton.alpha = .8;
            });

            selectErmahgerdButton.on("mouseout", function () {
                selectErmahgerdButton.alpha = 1;
            });

            // if ermahgerd is chosen, computer is set to 'doge' and player is set to ermahgerd
            // else if doge is selected, computer is set to ermahgerd and player is set to 'dogePlayer'
            playerCharacter = 'dogePlayer';
            enemyCharacter = 'ermahgerd';
            //mainGame.startGame(null);

            this.addChild(selectDogeButton, selectErmahgerdButton, selectPlayerText, mouseOverText);
            game.addChild(this);
        }
    }
} 