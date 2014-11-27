/// <reference path="Scripts/typings/createjs/createjs.d.ts"/>
/// <reference path="Scripts/typings/easeljs/easeljs.d.ts"/>
/// <reference path="Scripts/typings/preloadjs/preloadjs.d.ts"/>
/// <reference path="Scripts/typings/soundjs/soundjs.d.ts"/>
/// <reference path="scripts/typings/jquery.ts" />
/// <reference path="Scripts/typings/ndgmr/ndgmr.Collision.d.ts"/>

/*
    File: Main.ts
    Author: Gabriel Hounsome & Sam
    Website: Crazy Comets
    Description: This is a side-scroller shooter game 
    where the player must shoot oncoming asteroids and 
    pickup powerups

    Revision: 1.0
    Last Modified By: Gabriel Hounsome
    Date Last Modified: November 07, 2014

    Citations: Used JQuery, collsion detection module from indiegamer and royalty free art from: wrathgames.com
    Royalty Free Music: royalty free music from: http://www.looperman.com/media/loops/630386/looperman-l-0630386-0077610-mrfunktastic-trap-gods-bells-140f.mp3
*/



// globally accessible variables 
var explosions: createjs.Sprite[] = [];
var asteroidExplosions: createjs.Sprite[] = [];
var scoreBoard: managers.scoreboard;
var shipExplode: createjs.Sprite;
var gameOn = false;
var gameScore: number = 0;
var playerName = '';
var bullets: Bullet[] = [];
var bulletContainer: createjs.Container;
var currentMenu: createjs.Container;
var gameLevel: number;
// main class 
class Main {
    // private variables for the class
    private canvas: HTMLCanvasElement;
    private stage: createjs.Stage;
    private game: createjs.Container;
    private asteroidContainer: createjs.Container;
    private bgContainer: createjs.Container;
    private message: createjs.Text;
    private fps: createjs.Text;
    private background: Background;
    private bulletImg: HTMLImageElement;
    private music: createjs.SoundInstance;
    private asteroidArray: objects.Enemy[] = [];
    private powersArray: objects.Powerup[] = [];
    private gameOverScreen: boolean = false;
    private ship: objects.Ship;
    private debounce: number;
    private STAGE_WIDTH = 800;
    private enemies: number;
    private powerupInterval: number;
    private eInterval: number = 4000;
    private MULTI_AMOUNT: number = 10000;
    private multiTimer: number;
    private enemyCharacter: string;
    private playerCharacter: string;

    private enemiesSpawn: number = 1;
    private enemyHealth: number = 100;
    private levelIncrementChecker: number = 0;


    


    // Main class constructor Set up the board.
    constructor(canvas: HTMLCanvasElement) {
        // set up the stage and add a message
        gameLevel = 1;


        this.canvas = canvas;
        this.game = new createjs.Container();
        bulletContainer = new createjs.Container();
        bulletContainer.cache(0, 0, this.canvas.width, this.canvas.height);
        this.asteroidContainer = new createjs.Container();
        this.asteroidContainer.cache(0, 0, this.canvas.width, this.canvas.height);
        this.bgContainer = new createjs.Container();
        this.stage = new createjs.Stage(canvas);
        this.message = new createjs.Text('', 'bold 30px Comic Sans MS', '#ffffff');
        this.message.textAlign = 'center';
        this.message.x = canvas.width * .5;
        this.message.y = canvas.height * .5;
        this.game.addChild(this.message);
        this.stage.addChild(this.bgContainer, this.game, bulletContainer, this.asteroidContainer);
        // enable mouse and dom events
        this.stage.enableMouseOver();
        this.stage.enableDOMEvents(true);


        this.enemyCharacter = "ermahgerd";
        this.playerCharacter = "doge";


        // load the assets
        managers.Assets.init();
        managers.Assets.loader.addEventListener("complete", (e: createjs.Event) => { this.onComplete(e) });
        managers.Assets.loader.addEventListener('progress', (e: createjs.Event) => { this.loading(e) });
    }
    private setLevelVariables() {
        if (gameLevel == 1 ) {
            this.background.setBackgroundSpeed(100);
            this.enemiesSpawn = 1;
            this.enemyHealth = 100;
            this.levelIncrementChecker++;
        }
        else if (gameLevel == 2) {
            this.background.setBackgroundSpeed(150);
            scoreBoard.setLife(1.15);
            this.enemiesSpawn = 2;
            this.levelIncrementChecker++;
        }
        else if (gameLevel == 3) {
            this.background.setBackgroundSpeed(250);
            scoreBoard.setLife(1.20);
            this.enemyHealth = 150;
            this.levelIncrementChecker++;
        }
    }
    // Show loading progress to the user
    private loading(e: createjs.Event) {
        this.message.text = 'Loading: ' + Math.round(e.progress * 100) + '%';
        this.stage.update();
    }
    // after the preloader is done, execute this.
    private onComplete(e: createjs.Event) {
        // load the spritesheet image into the atlas
        managers.Assets.atlas = new createjs.SpriteSheet(managers.Assets.loader.getResult('spriteSheet'));
        // set the background

        var backgroundImg = <HTMLImageElement> managers.Assets.loader.getResult('background')
        this.background = new Background(backgroundImg, this.canvas);
        this.bgContainer.addChild(this.background);

        this.setLevelVariables();
        //this.background = new Background();


        // set up the tick event, start the music and set the framerate
        createjs.Ticker.on('tick', (e2: createjs.TickerEvent) => { this.tick(e2, e) });
        createjs.Sound.play("music", { loop: -1, volume: 0.4 });
        createjs.Ticker.setFPS(120);
        //add the background, update the stage and open the front menu

        this.showNameForm(e);
    }
    private frontMenu(e: createjs.Event) {
        
        // add the buttons to the game container and add it to the stage.
        
        this.game.removeChild(this.message);
        // get the form
        currentMenu = new menus.FrontMenu(this.canvas, this, this.message, this.game);
        this.game.addChild(currentMenu);
        this.stage.addChild(this.game);

    }
    // create an enemy item
    private createEnemy() {
        // create a variable that references a new enemy object, pass it the stage and container
        //console.log(
        for(var i = 0; i < this.enemiesSpawn; i++){
            var newAsteroid = new objects.Enemy(this.STAGE_WIDTH, 0, 'enemy', this.stage, this.asteroidContainer, this.enemyCharacter, this.enemyHealth);
            this.asteroidContainer.addChild(newAsteroid);
            // push the variable into an array 
            this.asteroidArray.push(newAsteroid);
        }
        // update the stage.
        // clear the interval and re-add it then reduce the interval time by 100 milliseconds to a minimum of 700
        window.clearInterval(this.enemies);
        this.enemies = setInterval(() => { this.createEnemy() }, this.eInterval);
        if (this.eInterval > 1000) {
            this.eInterval -= 100;
        }
    }
    // create an enemy item
    private createPowerup() {
        // create a variable that references a new Powerup object, pass it the stage and container
        var newPU = new objects.Powerup(this.STAGE_WIDTH, 0, 'powerup', this.stage);
        this.game.addChild(newPU);
        // push the variable into an array 
        this.powersArray.push(newPU);
        // update the stage.
    }
    private movePowerUps(ds: number) {
        // loop through the powerup array and move them closer to the edge of the screen.
        for (var i in this.powersArray) {
            var cPower = this.powersArray[i];
            var collision = ndgmr.checkPixelCollision(cPower, this.ship, 0);
            // check for a collision between powerup and ship
            if (collision) {
                if (cPower.name == '114') { scoreBoard.update(1000); }
                else if (cPower.name == '115') { scoreBoard.changeMulti(2); this.multiTimer = createjs.Ticker.getTime() + this.MULTI_AMOUNT; }
                else if (cPower.name == '116') {
                    for (var i in this.asteroidArray) {
                        var asteroidObj = this.asteroidArray[i];
                        asteroidObj.destroy();
                    }
                }
                else if (cPower.name == '117') { scoreBoard.giveLife(); }
                this.removeElement(cPower, this.powersArray, this.game);
            }
            cPower.tick(ds);
            // if the powerup is past the edge of the screen, delete it.
            if (cPower.x < 0 - cPower.getBounds().width) {
                this.removeElement(cPower, this.powersArray, this.game);
            }
        }
    }
    // Start the game.
    public startGame(e: createjs.Event) {
        // hide the cursor
        //this.stage.cursor = "none";
        // remove all children from the game container.
        this.game.removeAllChildren();
        // set the game state to true and the game over screen to false

        this.gameOverScreen = false;
        // set the score to 0 and the interval to 5 seconds
        gameScore = 0;
        this.eInterval = 4000;
        // clear the arrays
        bullets = [];
        this.asteroidArray = [];
        explosions = [];
        asteroidExplosions = [];
        // crea the bullet image        
        this.bulletImg = managers.Assets.atlas.getFrame(0).image;
        // set up the scoreboard
        scoreBoard = new managers.scoreboard(this.game);
        // create the ship object and setup the collision manager.
        this.ship = new objects.Ship(this.stage, this.game);
        this.game.addChild(this.ship);
        // set up the initial enemy spawner and powerup interval
        this.enemies = setInterval(() => { this.createEnemy() }, 150);
        this.powerupInterval = setInterval(() => { this.createPowerup() }, 10000);
        // add a debounce timer for the shooter and add event listeners to the stage.        
        this.debounce = createjs.Ticker.getTime();

        this.stage.addEventListener("click", (e: createjs.MouseEvent) => { this.shipFireClick(e) });
        this.stage.addEventListener("stagemousemove", (e: createjs.MouseEvent) => { this.stageMouseMove(e) });

        gameOn = true;
    }
    // move the asteroids.
    private moveAsteroids(ds: number) {
        // loop through each asteroid 
        for (var i in this.asteroidArray) {
            var asteroidObj = this.asteroidArray[i];
            // if its health is <= 0, delete it from the array
            if ((asteroidObj.x <= 0 - (asteroidObj.getBounds().width))) {
                this.removeElement(asteroidObj, this.asteroidArray, this.asteroidContainer);
            }
            if (asteroidObj.health <= 0) {
                asteroidObj.destroy();

                this.removeElement(asteroidObj, this.asteroidArray, this.asteroidContainer);
            }
            // otherwise move the asteroid onwards
            else {
                asteroidObj.tick(ds);
                // check for collisions between asteroid and the ship
                var collision = ndgmr.checkPixelCollision(asteroidObj, this.ship, 0);
                // if a collision happens...
                if (collision) {
                    // destroy the asteroid
                    asteroidObj.destroy();
                    // if the player is out of lives...
                    if (scoreBoard.loseLife(true)) {

                        // destroy ship.
                        this.game.removeChild(this.ship);
                        // start ship explosion
                        shipExplode = new createjs.Sprite(managers.Assets.atlas, "ship_explosion");
                        shipExplode.x = this.ship.x - (this.ship.getBounds().width * 1.5);
                        shipExplode.y = this.ship.y - (this.ship.getBounds().height * 1.5);
                        shipExplode.play();
                        // play explosion sound
                        createjs.Sound.play("asteroidExplosion");
                        // add explosion to the game container
                        this.game.addChild(shipExplode);
                        // set the game to false
                        gameOn = false;
                    }
                }
            }
        }
        // do the asteroid explosions, loop through the array for each explosion and check if it still has frames to display
        for (var i in asteroidExplosions) {
            var aExplosion = asteroidExplosions[i];
            if (aExplosion.currentFrame == 113) {
                // stop the animation and remove it from the game container and array
                aExplosion.stop();
                this.removeElement(aExplosion, asteroidExplosions, this.asteroidContainer);

            }
        }
        this.asteroidContainer.updateCache();
    }

    // move the bullets! PEW-PEW!
    private moveBullets(ds: number) {
        // loop through the bullets array and move them closer to the edge of the screen.
        for (var i in bullets) {
            var bullet = bullets[i];
            bullet.tick(ds);
            var newBullet = managers.Assets.atlas.getFrame(6).image;
            var bulletBox = new createjs.Bitmap(newBullet);


            bulletBox.x = bullet.x;
            bulletBox.sourceRect = new createjs.Rectangle(bullet.x, bullet.y, bullet.regX * 1.5, 10);
            bulletBox.y = bullet.y;
            // loop through the asteroid array and check for a collision between the current bullet in the above loop and the enemy in this new loop

            if (bullet.playerBullet()) {
                for (var count = 0; count < this.asteroidArray.length; count++) {
                    var collision = ndgmr.checkRectCollision(this.asteroidArray[count], bulletBox);
                    // if a collision happens...
                    if (collision) {
                        // damage the asteroid then remove the bullet from the game and from the array.
                        this.asteroidArray[count].damage();
                        this.removeElement(bullet, bullets, bulletContainer);
                        // create an explosion for the bullet and put it into an explosion array
                        var explosionSprite = new createjs.Sprite(managers.Assets.atlas, "bullet_explosion");
                        explosionSprite.x = bullet.x;
                        explosionSprite.y = bullet.y;
                        explosionSprite.name = 'explode';
                        explosionSprite.play();
                        explosions.push(explosionSprite);
                        // create an explosion sound for the bullet
                        createjs.Sound.play("explosion");
                        // add the explosion to the game container and update the stage.
                        bulletContainer.addChild(explosionSprite);
                    }
                }
            }
            else {
                var collision = ndgmr.checkRectCollision(this.ship, bulletBox);
                // if a collision happens...
                if (collision) {
                    scoreBoard.loseLife(false);
                    this.removeElement(bullet, bullets, bulletContainer);
                    // create an explosion for the bullet and put it into an explosion array
                    var explosionSprite = new createjs.Sprite(managers.Assets.atlas, "bullet_explosion");
                    explosionSprite.x = bullet.x;
                    explosionSprite.y = bullet.y;
                    explosionSprite.name = 'explode';
                    explosionSprite.play();
                    explosions.push(explosionSprite);
                    // create an explosion sound for the bullet
                    createjs.Sound.play("explosion");
                    // add the explosion to the game container and update the stage.
                    bulletContainer.addChild(explosionSprite);
                }

            }
            // if the game is past the edge of the screen, delete it.
            if (bullet.x > this.canvas.width || bullet.x < 0) {
                this.removeElement(bullet, bullets, bulletContainer);
            }
        }
        // do the bullet explosions, loop through the array for each explosion and check if it still has frames to display
        for (var i in explosions) {
            var explosion = explosions[i];
            if (explosion.currentFrame == 23) {
                // stop the animation and remove it from the game container and array
                explosion.stop();
                this.removeElement(explosion, explosions, bulletContainer);
            }
        }
        bulletContainer.updateCache();
    }
    // this is the ticker class
    private tick(e: createjs.TickerEvent, e2: createjs.Event) {
        var ds = e.delta / 1000;

        if (scoreBoard != null) {
            if (scoreBoard.getEnemiesDestroyed() >= 5 && this.levelIncrementChecker == 2) {
                gameLevel = 3;
                console.log(gameLevel);
                this.setLevelVariables();
            }
            else if (scoreBoard.getEnemiesDestroyed() >= 2 && this.levelIncrementChecker == 1) {
                gameLevel = 2;
                console.log(gameLevel);
                this.setLevelVariables();
            }
        }

        // move the background image
        this.background.tick(ds);
        // if the game state is true...
        if (gameOn) {
            // this handles the score multiplier, reset it to 1 after 10 seconds
            if (this.multiTimer <= createjs.Ticker.getTime() && scoreBoard.getMulti() == 2) {
                scoreBoard.resetMulti();
            }
            // move the asteroids!
            this.moveAsteroids(ds);
            this.movePowerUps(ds);

            // move the bullets!
            this.moveBullets(ds);
        }
        // do the ship explosion, loop through the array for each explosion and check if it still has frames to display
        if (shipExplode != null) {
            if (shipExplode.currentFrame == 142) {
                // stop the animation and remove it from the game container and array
                shipExplode.stop();
                this.game.removeChild(shipExplode);
                shipExplode = null;
                // end the game
                this.gameOver(e2);
            }
        }
        // update the stage
        this.stage.update(e);
    }
    // game over :(
    private gameOver(e: createjs.Event) {
        // remove all children from the game container and all event listeners from the stage.
        asteroidExplosions = [];
        bullets = [];
        this.asteroidArray = [];
        this.asteroidContainer.removeAllChildren();
        bulletContainer.removeAllChildren();
        this.game.removeAllChildren();
        this.stage.removeAllEventListeners();
        // set the cursor back to normal
        this.stage.cursor = "default";
        // create the back button and text with the mouse over and click events
        
        window.clearInterval(this.powerupInterval);
        window.clearInterval(this.enemies);
        

        send(playerName, gameScore);
        this.asteroidContainer.updateCache();
        bulletContainer.updateCache();

        currentMenu.removeAllChildren();
        currentMenu = new menus.GameOver(this.message, this.canvas, this, this.game);

        this.game.addChild(currentMenu);
        this.stage.update();
        // add the message and button to the container and add the container to the stage then update.
        
    }
    // mouse move event
    private stageMouseMove(e: createjs.MouseEvent) {
        // if game is active, update the ship position
        if (gameOn) {
            this.ship.update(e);
        }
    }
    // this is the only method anyone cares about; FIREPOWER!
    private shipFireClick(e: createjs.MouseEvent) {
        // check if the game is on
        if (gameOn) {
            // get the current game time
            var newTime = createjs.Ticker.getTime();
            // if the game time is greater than the debounce time plus 250ms, then continue
            if (this.debounce + 250 < newTime && gameOn) {
                // create two bullets for the ship and put them into an array
                var newBullet = managers.Assets.atlas.getFrame(6).image;
                var bulletL = new Bullet(this.stage, this.playerCharacter, true, this.ship.rotation);
                //var bulletL = new Bullet(this.ship.rotation, this.stage, "doge");

                bullets.push(bulletL);
                //var bulletR = new Bullet(newBullet, managers.Assets.atlas.getFrame(6).rect, this.ship.imageShip.x, this.ship.imageShip.y, this.ship.getShipRotation());
                //this.bullets.push(bulletR);
                // create a sound for the bullets
                createjs.Sound.play("laser");
                // add the bullets to the game container

                bulletContainer.addChild(bulletL);
            }
        }
    }
    // show the name form
    private showNameForm(e: createjs.Event) {
        this.game.removeChild(this.message);
        // get the form
        currentMenu = new menus.ShowName(this.message, this.canvas, this, this.game);
        this.game.addChild(currentMenu);
        this.stage.addChild(this.game);
    }

    // Remove element from the stage and from its array.
    private removeElement(el: any, arr: any[], stage: any) {
        stage.removeChild(el);
        var index = arr.indexOf(el);
        arr.splice(index, 1);
    }
}
// when the page has loaded, execute this.
window.addEventListener('load', () => {
    // get the canvas
    var canvas = <HTMLCanvasElement> document.getElementById('gameCanvas');
    canvas.style.background = '#000000';
    // call the Main function constructor above and pass the canvas to it.
    var main = new Main(canvas);
});
// send the name and score to the php script via ajax
function send(name, score) {
    $.ajax({
        type: "POST",
        url: "saveScore.php",
        data: { name: name, score: score }
    });
    return false;
}
// get the high score board
function getScores() {
    $.ajax({
        type: "POST",
        url: "getScores.php",
        //data: "name=" + name + "&score=" + score,
        success: function (data) {
            document.getElementById('highScoreDiv').innerHTML = data;
        }
    });
    return false;
}
// create the highscore board
function createHighScoreBoard() {
    var div = document.createElement('div');
    div.id = 'highScoreDiv';
    div.style.position = "absolute";
    div.style.top = '0';
    div.style.left = '0';
    div.style.color = 'white';
    div.style.overflowY = 'scroll';
    div.style.height = '300px';
    div.style.width = '200px';
    $('body').append(div);
    getScores();
    return div;
}
// create the name form
function nameForm() {
    var form = document.createElement('form');
    form.method = 'post';
    form.action = 'saveScore.php';
    form.id = 'scoreForm';
    var div = document.createElement('div');
    var span = document.createElement('span');
    span.textContent = 'Please Enter Your Name: ';
    span.style.color = 'white';
    var input = document.createElement('input');
    var scoreInput = document.createElement('input');
    scoreInput.style.visibility = 'hidden';
    scoreInput.id = 'scrInput';
    input.type = 'text';
    input.id = 'nameBx';
    input.maxLength = 15;
    input.value = '';
    form.style.position = "absolute";
    form.style.top = '0';
    form.style.left = '0';
    div.appendChild(span);
    div.appendChild(input);
    div.appendChild(scoreInput);
    form.appendChild(div);
    $('body').append(form);
    return form;
}
