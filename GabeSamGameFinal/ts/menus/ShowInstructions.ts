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
            message.font = 'bold 20px Segoe UI';
            message.lineWidth = canvas.width * .5;
            message.x = canvas.width * .5;
            message.y = 60;
            message.textAlign = 'center';
            message.text = "Choose between Ermahgerd or Doge. \n\n"
            + "Use the mouse to move the ship around the screen.\n"
            + "Use the spacebar to pause the game.\n"
            + "Left click to shoot the enemy memes before they hit you (Careful, it takes more than one "
            + "shot to kill them. \nIf the mouse leaves the game area, you will lose control of the ship. "
            + "\n\nDestroy as many enemies as you can to boost your score and pick up the powerups for perks.";
            var goldBar = new createjs.Sprite(managers.Assets.atlas);
            goldBar.gotoAndStop(112);
            goldBar.x = 260;
            goldBar.y = 360;
            var goldText = new createjs.Text('This gives you 1000 points', 'bold 17px Segoe UI', '#ffffff');
            goldText.lineWidth = 100;
            goldText.x = goldBar.x + 30;
            goldText.y = goldBar.y + 75;
            goldText.textAlign = 'center';
            var multiBubble = new createjs.Sprite(managers.Assets.atlas);
            multiBubble.gotoAndStop(113);
            multiBubble.x = 400;
            multiBubble.y = 360;
            var multiText = new createjs.Text('This gives you a x2 score multiplier', 'bold 17px Segoe UI', '#ffffff');
            multiText.lineWidth = 100;
            multiText.x = multiBubble.x + 30;
            multiText.y = multiBubble.y + 75;
            multiText.textAlign = 'center';
            var nukeBomb = new createjs.Sprite(managers.Assets.atlas);
            nukeBomb.gotoAndStop(114);
            nukeBomb.x = 540;
            nukeBomb.y = 360;
            var nukeText = new createjs.Text('This blows up all the enemy memes on the screen', 'bold 17px Segoe UI', '#ffffff');
            nukeText.lineWidth = 100;
            nukeText.x = nukeBomb.x + 30;
            nukeText.y = nukeBomb.y + 75;
            nukeText.textAlign = 'center';
            var healthBubble = new createjs.Sprite(managers.Assets.atlas);
            healthBubble.gotoAndStop(115);
            healthBubble.x = 680;
            healthBubble.y = 360;
            var healthText = new createjs.Text('This gives you 10 health', 'bold 17px Segoe UI', '#ffffff');
            healthText.lineWidth = 100;
            healthText.x = healthBubble.x + 30;
            healthText.y = healthBubble.y + 75;
            healthText.textAlign = 'center';
            this.addChild(backBtn, backBtnText, message, goldBar, goldText, multiBubble,multiText,nukeBomb,nukeText,healthBubble,healthText);
            game.addChild(this);
        }
    }
} 