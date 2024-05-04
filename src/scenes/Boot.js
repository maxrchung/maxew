import { Scene } from 'phaser';

export class Boot extends Scene {
    constructor() {
        super('Boot');
    }

    preload() {
        //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
        //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.

        this.load.image('background', 'assets/bg.png');

        this.load.image('maxew1', 'assets/maxew1.png');
        this.load.image('maxew2', 'assets/maxew2.png');

        this.load.image('play1', 'assets/play1.png');
        this.load.image('play2', 'assets/play2.png');

        this.load.image('help1', 'assets/help1.png');
        this.load.image('help2', 'assets/help2.png');
    }

    create() {
        this.scene.start('MainMenu');
    }
}
