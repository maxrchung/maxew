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

        load(scene, 'maxew');
        load(scene, 'play');
        load(scene, 'help');
        load(scene, 'helptext');
        load(scene, 'back');
        load(scene, 'endtext');
        load(scene, 'replay');
    }

    create() {
        this.scene.start('MainMenu');
    }
}
