import { Scene } from 'phaser';

const load = (scene, key) => {
    scene.load.image(`${key}1`, `${key}1.png`);
    scene.load.image(`${key}2`, `${key}2.png`);
};

export class Boot extends Scene {
    constructor() {
        super('Boot');
    }

    preload() {
        //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
        //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.

        //  Load the assets for the game - Replace with your own assets
        this.load.setPath('assets');

        this.load.audio('max300', 'max300.mp3');
        this.load.audio('click', 'click.mp3');
        this.load.audio('jump', 'jump.mp3');
        this.load.audio('nice', 'nice.mp3');

        load(this, 'maxew');
        load(this, 'play');
        load(this, 'help');
        load(this, 'helptext');
        load(this, 'back');
        load(this, 'endtext');
        load(this, 'replay');
        load(this, 'map');

        this.load.image('walk0', 'swagboi/walk0001.png');
        this.load.image('walk1', 'swagboi/walk0002.png');
        this.load.image('walk2', 'swagboi/walk0003.png');
        this.load.image('walk3', 'swagboi/walk0004.png');
        this.load.image('walk4', 'swagboi/walk0005.png');
        this.load.image('walk5', 'swagboi/walk0006.png');
        this.load.image('walk6', 'swagboi/walk0007.png');
        this.load.image('walk7', 'swagboi/walk0008.png');

        this.load.image('idle0', 'swagboi/idle0001.png');
        this.load.image('idle1', 'swagboi/idle0002.png');
        this.load.image('idle2', 'swagboi/idle0003.png');
        this.load.image('idle3', 'swagboi/idle0004.png');

        this.load.image('walk_jump00', 'swagboi/walk_jump0001.png');
        this.load.image('walk_jump01', 'swagboi/walk_jump0002.png');
        this.load.image('walk_jump02', 'swagboi/walk_jump0003.png');
        this.load.image('walk_jump03', 'swagboi/walk_jump0004.png');
        this.load.image('walk_jump04', 'swagboi/walk_jump0005.png');
        this.load.image('walk_jump05', 'swagboi/walk_jump0006.png');
        this.load.image('walk_jump06', 'swagboi/walk_jump0007.png');
        this.load.image('walk_jump07', 'swagboi/walk_jump0008.png');
        this.load.image('walk_jump08', 'swagboi/walk_jump0009.png');
        this.load.image('walk_jump09', 'swagboi/walk_jump0010.png');
        this.load.image('walk_jump10', 'swagboi/walk_jump0011.png');
        this.load.image('walk_jump11', 'swagboi/walk_jump0012.png');
        this.load.image('walk_jump12', 'swagboi/walk_jump0013.png');
        this.load.image('walk_jump13', 'swagboi/walk_jump0014.png');
        this.load.image('walk_jump14', 'swagboi/walk_jump0015.png');
        this.load.image('walk_jump15', 'swagboi/walk_jump0016.png');

        this.load.image('bezel', 'bezel.png');
    }

    create() {
        this.sound
            .add('max300', {
                volume: 0.1,
                loop: true,
            })
            .play();

        this.scene.start('MainMenu');
        // this.scene.start('CollisionTester');
    }
}
