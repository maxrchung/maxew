import { Scene } from 'phaser';

const load = (scene, key) => {
    scene.load.image(`${key}1`, `assets/${key}1.png`);
    scene.load.image(`${key}2`, `assets/${key}2.png`);
};

export class Boot extends Scene {
    constructor() {
        super('Boot');
    }

    preload() {
        //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
        //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.

        load(this, 'maxew');
        load(this, 'play');
        load(this, 'help');
        load(this, 'helptext');
        load(this, 'back');
        load(this, 'endtext');
        load(this, 'replay');
    }

    create() {
        this.scene.start('MainMenu');
    }
}
