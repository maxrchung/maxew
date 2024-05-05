import { Scene } from 'phaser';
import createStutter from '../createStutter';

export class MainMenu extends Scene {
    constructor() {
        super('MainMenu');
    }

    create() {
        // this.cameras.main.setPostPipeline('Reflect');

        createStutter(this, 'maxew', 960, 475);

        const play = createStutter(this, 'play', 760, 725);
        play.setInteractive()
            .on('pointerdown', () => this.scene.start('Game'))
            .on('pointerover', () => play.setPipeline('Invert'))
            .on('pointerout', () => play.resetPipeline());

        const help = createStutter(this, 'help', 1160, 725);
        help.setInteractive()
            .on('pointerdown', () => this.scene.start('Help'))
            .on('pointerover', () => help.setPipeline('Invert'))
            .on('pointerout', () => help.resetPipeline());
    }
}
