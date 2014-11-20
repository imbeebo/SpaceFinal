/*
File: assets.ts
Author: Gabriel Hounsome
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

module managers {
    // Image and Sound Manifest;
    var assetManifest = [
        { src: 'assets/images/BackgroundB1.jpg', id: 'background' },
        { src: 'assets/sounds/music.mp3', id: 'music' },
        { src: 'assets/sounds/Laser.mp3', id: 'laser' },
        { src: 'assets/sounds/Explosion.mp3', id: 'explosion' },
        { src: 'assets/sounds/asteroidExplode.mp3', id: 'asteroidExplosion' },
        { src: 'assets/data/sprites.json', id: 'spriteSheet' },
        { src: 'assets/images/spriteSheet.png', id: 'spriteImg' },
        { src: 'assets/images/star001.png', id: 'star1' },
        { src: 'assets/images/star002.png', id: 'star2' },
        { src: 'assets/images/star003.png', id: 'star3' },
        { src: 'assets/images/star004.png', id: 'star4' },
        { src: 'assets/images/star005.png', id: 'star5' },
        { src: 'assets/images/star006.png', id: 'star6' },
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