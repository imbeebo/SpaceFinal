/*
    File: Powerup.ts
    Author: Gabriel Hounsome & Sam Halloran
    Website: Meme Wars
    Description: This is a side-scroller shooter game 
    where the player must shoot oncoming memes. Avoid being hit or shot by them. 
    There are powerups to help you get through the levels
    Date: December 11, 2014

    Citations: Used JQuery, collsion detection module from indiegamer and royalty free art from: wrathgames.com
    Royalty Free Music: royalty free music from: http://www.looperman.com/media/loops/630386/looperman-l-0630386-0077610-mrfunktastic-trap-gods-bells-140f.mp3
*/

module objects {
    // Powerup class
    export class Powerup extends objects.Object {
        // public variables
        dy: number;
        dx: number;
        stage: createjs.Stage;
        // private variables
        arrayNums = [];
        weight = [];
        weightedList = [];

        // constructor for powerup class
        constructor(x: number, y: number, name: string, stage: createjs.Stage) {
            super(x, y, name);
            this.arrayNums = [112, 113, 114, 115];
            this.weight = [0.50, 0.30, 0.10, 0.10];
            // set up the stage and game container
            var newPowerup = this.chooseFromList();
            this.gotoAndStop(newPowerup);
            // randomly select powerups from the atlas
            // get the randomly selected power into an image
            this.regX = this.getBounds().width * .5;
            this.regY = this.getBounds().height * .5;
            this.name = newPowerup.toString();
            this.stage = stage;
            // call the reset function
            this.reset(x);
            // add the powerup to the game container.
        }
        // reset the image
        reset(x: number) {
            // set image x to the far right of the canvas
            this.x = x;
            // set the dy and dx to random values
            this.dy = Math.floor(Math.random() * 5 + 5);
            this.dx = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
            // set the y coordinate to a random value
            //var randomY = Math.floor(Math.random() * this.stage.canvas.height);
            this.y = rand(30, this.stage.canvas.height-30);
        }
        tick(ds: number) {
            // move the powerup forward
            this.x -= ds * 120;
        }  
        // randomly choose the powerup
        chooseFromList(): number {
            this.weightedList = weightListGenerator(this.arrayNums, this.weight);
            var random_num = rand(0, this.weightedList.length - 1);
            return this.weightedList[random_num];
        }
    }
}
// get random number
var rand = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
// generate a weighted list
var weightListGenerator = function (list, weight) {
    var weighed_list = [];
    // Loop over weights
    for (var i = 0; i < weight.length; i++) {
        var multiples = weight[i] * 100;
        // Loop over the list of items
        for (var j = 0; j < multiples; j++) {
            weighed_list.push(list[i]);
        }
    }
    return weighed_list;
};