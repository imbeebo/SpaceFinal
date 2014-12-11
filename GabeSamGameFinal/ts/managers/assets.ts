/*
File: assets.ts
Author: Gabriel Hounsome & Sam Halloran
Website: Meme Wars
Description: This is a side-scroller shooter game 
where the player must shoot oncoming memes. Avoid being hit or shot by them. 
There are powerups to help you get through the levels

Revision: 1.0
Last Modified By: Gabriel Hounsome
Date Last Modified: November 07, 2014

Citations: Used JQuery, collsion detection module from indiegamer and royalty free art from: wrathgames.com
Royalty Free Music: royalty free music from: http://www.looperman.com/media/loops/630386/looperman-l-0630386-0077610-mrfunktastic-trap-gods-bells-140f.mp3
*/

module managers {
    // Image and Sound Manifest;
    var assetManifest = [
        { src: 'assets/images/BackgroundB1.jpg', id: 'background' },
        { src: 'assets/sounds/music.mp3', id: 'menuMusic' },
        { src: 'assets/sounds/backgroundMusic.mp3', id: 'music' },
        { src: 'assets/sounds/bark.mp3', id: 'dogeBark' },
        { src: 'assets/sounds/ermahgerd.mp3', id: 'ermahgerdShoot' },
        { src: 'assets/sounds/Explosion.mp3', id: 'explosion' },
        { src: 'assets/sounds/powerupSound.mp3', id: 'powerupSound' },
        { src: 'assets/sounds/asteroidExplode.mp3', id: 'asteroidExplosion' },
        { src: 'assets/data/sprites.json', id: 'spriteSheet' },
        { src: 'assets/images/spriteSheet.png', id: 'spriteImg' }
    ];

    // Asset Manager Class
    export class Assets {
        // publically accessible variables
        public static manifest;
        public static data;
        public static loader;
        public static atlas: createjs.SpriteSheet;
        public static init() {
            // set up the loader and initialize plugins
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            // load the manifest.
            this.loader.loadManifest(assetManifest);
        }

    }
} 