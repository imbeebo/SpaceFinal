module menus {
    // Score Class
    export class ChoosePlayer extends createjs.Container {
        // private variables


        // constructor for the scoreboard
        constructor(mainGame: Main, message: createjs.Text, game: createjs.Container) {
            super();
            // if ermahgerd is chosen, computer is set to 'doge' and player is set to ermahgerd
            // else if doge is selected, computer is set to ermahgerd and player is set to 'dogePlayer'
            playerCharacter = 'dogePlayer';
            enemyCharacter = 'ermahgerd';
            mainGame.startGame(null);
        }
    }
} 