import { Scene } from 'phaser';
import createStutter from '../createStutter';

export class Help extends Scene {
    constructor() {
        super('Help');
    }

    create() {
        this.cameras.main.setPostPipeline('Reflect');

        createStutter(this, 'helptext', 960, 425);

        const back = createStutter(this, 'back', 960, 800);
        back.setInteractive()
            .on('pointerdown', () => this.scene.start('MainMenu'))
            .on('pointerover', () => back.setPipeline('Invert'))
            .on('pointerout', () => back.resetPipeline());
    }
}
