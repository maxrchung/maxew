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
        const invertPipeline = this.renderer.pipelines.get('Invert');

        createStutter(this, 'maxew');
        createStutter(this, 'play');
        createStutter(this, 'help');

        this.add.sprite(960, 475).play('maxew');

        const play = this.add.sprite(760, 725).play('play');
        play.setInteractive()
            .on('pointerdown', () => this.scene.start('Game'))
            .on('pointerover', () => play.setPipeline(invertPipeline))
            .on('pointerout', () => play.resetPipeline());

        const help = this.add.sprite(1160, 725).play('help');
        help.setInteractive()
            .on('pointerdown', () => this.scene.start('Help'))
            .on('pointerover', () => help.setPipeline(invertPipeline))
            .on('pointerout', () => help.resetPipeline());
    }
}
