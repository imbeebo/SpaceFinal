/*
    File: ChoosePlayer.ts
    Author: Gabriel Hounsome & Sam Halloran
    Website: Space Doge
    Description: This file is used to generate the Choose Player game state in which the user 
    selects their character

    Revision: 1.1
    Last Modified By: Gabriel Hounsome
    Date Last Modified: November 30, 2014

    Citations: Used JQuery, collsion detection module from indiegamer and royalty free art from: wrathgames.com
    Royalty Free Music: royalty free music from: http://www.looperman.com/media/loops/630386/looperman-l-0630386-0077610-mrfunktastic-trap-gods-bells-140f.mp3
*/

module menus {
    // Score Class
    export class ChoosePlayer extends GameMenu {
        // private variables
        private selectDogeButton;
        private selectErmahgerdButton;
        private canvas: HTMLCanvasElement;

        // constructor for the scoreboard
        constructor(canvas: HTMLCanvasElement, mainGame: Main, message: createjs.Text, game: createjs.Container) {
            super();

            this.canvas = canvas;

            //clear remaining objects from previous state
            currentMenu.removeAllChildren();
            game.removeAllChildren();

            //generate required objects (text, buttons) required for this state
            this.selectDogeButton = new objects.Button((canvas.width * .5) - 90, canvas.height * .5, 20, 20);
            this.selectErmahgerdButton = new objects.Button((canvas.width * .5) + 90, canvas.height * .5, 21, 21);
            var mouseOverText = new createjs.Text('Doge', 'bold 15px Segoe UI', '#e66000');
            var selectPlayerText = new createjs.Text('Select Your Player . . .', 'bold 25px Segoe UI', '#e66000');

            selectPlayerText.x = (canvas.width * .5) - (selectPlayerText.getBounds().width * .5);
            selectPlayerText.y = 50;

            mouseOverText.x = (canvas.width * .5) - (mouseOverText.getBounds().width * .5);
            mouseOverText.y = 100;

            this.selectDogeButton.on("click", (e: createjs.Event) => {
                playerCharacter = 'dogePlayer';
                enemyCharacter = 'ermahgerd';  
                mainGame.startGame(null);
            });

            this.selectDogeButton.on("mouseover", (e: createjs.Event) => {
                mouseOverText.text = "Doge";
                mouseOverText.x = (canvas.width * .5) - (mouseOverText.getBounds().width * .5);
                this.selectDogeButton.alpha = .8;
            });

            this.selectDogeButton.on("mouseout", (e: createjs.Event) => {
                this.selectDogeButton.alpha = 1;
            });

            this.selectErmahgerdButton.on("click", (e: createjs.Event) => {
                playerCharacter = 'ermahgerd';
                enemyCharacter = 'doge';
                mainGame.startGame(null);
            });

            this.selectErmahgerdButton.on("mouseover", (e: createjs.Event) => {
                mouseOverText.text = "Ermahgerd";
                mouseOverText.x = (canvas.width * .5) - (mouseOverText.getBounds().width * .5);
                this.selectErmahgerdButton.alpha = .8;
            });

            this.selectErmahgerdButton.on("mouseout", (e: createjs.Event) => {
                this.selectErmahgerdButton.alpha = 1;
            });

            this.addChild(this.selectDogeButton, this.selectErmahgerdButton, selectPlayerText, mouseOverText);
            game.addChild(this);
        }

        public tick(ds: number) {
            this.selectDogeButton.y = Math.sin(createjs.Ticker.getTicks() * 0.07) + this.canvas.height * 0.5;
            this.selectErmahgerdButton.y = Math.cos(createjs.Ticker.getTicks() * 0.07) + this.canvas.height * 0.5;
        }
    }
} 