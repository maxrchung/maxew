import { Scene } from 'phaser';

const createStutter = (scene, key) => {
    scene.anims.create({
        key,
        frames: [{ key: key + '1' }, { key: key + '2' }],
        repeat: -1,
        frameRate: 2,
    });
};

export class MainMenu extends Scene {
    constructor() {
        super('MainMenu');
    }

    create() {
        createStutter(this, 'maxew');
        createStutter(this, 'play');
        createStutter(this, 'help');

        this.add.sprite(960, 475).play('maxew');
        this.add.sprite(760, 725).play('play');
        this.add.sprite(1160, 725).play('help');

        this.input.once('pointerdown', () => {
            this.scene.start('Game');
        });
    }
}
