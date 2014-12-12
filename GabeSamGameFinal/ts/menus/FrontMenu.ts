/*
    File: FrontMenu.ts
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
    export class FrontMenu extends GameMenu {
        // private variables


        // constructor for the scoreboard
        constructor(canvas: HTMLCanvasElement, mainGame: Main, message: createjs.Text, game: createjs.Container) {
            super();
            $('#highScoreDiv').remove();
            $('#scoreForm').remove();
            // clear all items from the game container
            currentMenu.removeAllChildren();
            game.removeAllChildren();
            // create the play button and text with the mouse over and click events
            var playButton = new objects.Button((canvas.width * .5) - (64), canvas.height * .5);
            var playBtnText = new createjs.Text('Play', 'bold 15px Segoe UI', '#e66000');
            playBtnText.on("click", (e: createjs.Event) => { currentMenu = new menus.ChoosePlayer(canvas, mainGame, message, game) });
            playBtnText.on("mouseover", function () { playButton.overBtn() });
            playBtnText.on("mouseout", function () { playButton.outBtn() });
            playButton.on("click", (e: createjs.Event) => { currentMenu = new menus.ChoosePlayer(canvas, mainGame, message, game) });
            playButton.on("mouseover", function () { playButton.overBtn() });
            playButton.on("mouseout", function () { playButton.outBtn() });
            playBtnText.x = playButton.x - 15;
            playBtnText.y = playButton.y - 10;
            playButton.name = 'play';
            playBtnText.name = 'play';
            playButton.cursor = "pointer";
            playBtnText.cursor = "pointer";
            // create the instruction button and text with the mouse over and click events
            var instructionButton = new objects.Button((canvas.width * .5) + (64), canvas.height * .5);
            instructionButton.on("click", (e: createjs.Event) => { currentMenu = new menus.ShowInstructions(message, canvas, mainGame, game) });
            instructionButton.on("mouseover", function () { instructionButton.overBtn() });
            instructionButton.on("mouseout", function () { instructionButton.outBtn() });
            instructionButton.name = 'instruct';
            instructionButton.cursor = "pointer";
            var insBtnText = new createjs.Text('Instructions', 'bold 15px Segoe UI', '#e66000');
            insBtnText.on("click", (e: createjs.Event) => { currentMenu = new menus.ShowInstructions(message, canvas, mainGame, game) });
            insBtnText.on("mouseover", function () { instructionButton.overBtn() });
            insBtnText.on("mouseout", function () { instructionButton.outBtn() });
            insBtnText.x = instructionButton.x - 40;
            insBtnText.y = instructionButton.y - 10;
            insBtnText.name = 'instruct';
            insBtnText.cursor = "pointer";
            // create the instruction button and text with the mouse over and click events
            var highScores = new objects.Button((canvas.width * .5), (canvas.height * .5) + 50);
            highScores.on("click", (e: createjs.Event) => { currentMenu = new menus.HighScores(message, canvas, mainGame, game) });
            highScores.on("mouseover", function () { highScores.overBtn() });
            highScores.on("mouseout", function () { highScores.outBtn() });
            highScores.name = 'highScore';
            highScores.cursor = "pointer";
            var hsBtnText = new createjs.Text('High Scores', 'bold 15px Segoe UI', '#e66000');
            hsBtnText.on("click", (e: createjs.Event) => { currentMenu = new menus.HighScores(message, canvas, mainGame, game) });
            hsBtnText.on("mouseover", function () { highScores.overBtn() });
            hsBtnText.on("mouseout", function () { highScores.outBtn() });
            hsBtnText.x = highScores.x - 40;
            hsBtnText.y = highScores.y - 10;
            hsBtnText.name = 'highScore';
            hsBtnText.cursor = "pointer";

            var bannerText = new createjs.Text('M E M E   W A R S', 'bold 60px Arial Narrow', '#e66000');
            bannerText.x = (canvas.width * .5) - (bannerText.getBounds().width * .5);
            bannerText.y = 150;

            this.addChild(playButton, playBtnText, instructionButton, insBtnText, highScores, hsBtnText, bannerText);
            game.addChild(this);
        }
    }
} 