import { Scene } from 'phaser';
import createStutter from '../createStutter';

export class GameOver extends Scene {
    constructor() {
        super('GameOver');
    }

    create() {
        createStutter(this, 'endtext', 960, 420);

        const replay = createStutter(this, 'replay', 960, 620);
        replay
            .setInteractive()
            .on('pointerdown', () => this.scene.start('Game'))
            .on('pointerover', () => replay.setPipeline('Invert'))
            .on('pointerout', () => replay.resetPipeline());
    }
}
