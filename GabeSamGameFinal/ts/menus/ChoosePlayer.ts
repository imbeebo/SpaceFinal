/*
    File: ChoosePlayer.ts
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
    // ChoosePlayer Class
    export class ChoosePlayer extends GameMenu {
        // private variables
        private selectDogeButton;
        private selectErmahgerdButton;
        private canvas: HTMLCanvasElement;

        // constructor for the ChoosePlayer
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
            // doge click button
            this.selectDogeButton.on("click", (e: createjs.Event) => {
                playerCharacter = 'dogePlayer';
                enemyCharacter = 'ermahgerd';  
                mainGame.startGame(null);
            });
            // doge mouse over
            this.selectDogeButton.on("mouseover", (e: createjs.Event) => {
                mouseOverText.text = "Doge";
                mouseOverText.x = (canvas.width * .5) - (mouseOverText.getBounds().width * .5);
                this.selectDogeButton.alpha = .8;
            });
            // doge mouse out
            this.selectDogeButton.on("mouseout", (e: createjs.Event) => {
                this.selectDogeButton.alpha = 1;
            });
            // ermahgerd click
            this.selectErmahgerdButton.on("click", (e: createjs.Event) => {
                playerCharacter = 'ermahgerd';
                enemyCharacter = 'doge';
                mainGame.startGame(null);
            });
            // ermahgerd mouse over
            this.selectErmahgerdButton.on("mouseover", (e: createjs.Event) => {
                mouseOverText.text = "Ermahgerd";
                mouseOverText.x = (canvas.width * .5) - (mouseOverText.getBounds().width * .5);
                this.selectErmahgerdButton.alpha = .8;
            });
            // ermahgerd mouse out
            this.selectErmahgerdButton.on("mouseout", (e: createjs.Event) => {
                this.selectErmahgerdButton.alpha = 1;
            });
            // add stuff to container and game
            this.addChild(this.selectDogeButton, this.selectErmahgerdButton, selectPlayerText, mouseOverText);
            game.addChild(this);
        }
        // add move effect to buttons
        public tick(ds: number) {
            this.selectDogeButton.y = Math.sin(createjs.Ticker.getTicks() * 0.1) * 1.5 + this.canvas.height * 0.5;
            this.selectErmahgerdButton.y = Math.cos(createjs.Ticker.getTicks() * 0.1) * 1.5 + this.canvas.height * 0.5;
        }
    }
} 