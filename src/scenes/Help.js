import { Scene } from 'phaser';
import createStutter from '../createStutter';

export class Help extends Scene {
    constructor() {
        super('Help');
    }

    create() {
        const invertPipeline = this.renderer.pipelines.get('Invert');

        createStutter(this, 'helptext', 960, 475);

        const back = createStutter(this, 'back', 1160, 725);
        back.setInteractive()
            .on('pointerdown', () => this.scene.start('MainMenu'))
            .on('pointerover', () => back.setPipeline(invertPipeline))
            .on('pointerout', () => back.resetPipeline());
    }
}
