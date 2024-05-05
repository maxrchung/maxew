import { Scene } from 'phaser';
import createStutter from '../createStutter';

export class GameOver extends Scene {
    constructor() {
        super('GameOver');
    }

    create() {
        this.cameras.main.setPostPipeline('Reflect');

        createStutter(this, 'endtext', 960, 420);

        const replay = createStutter(this, 'replay', 960, 620);
        replay
            .setInteractive({
                useHandCursor: true,
                hitArea: new Phaser.Geom.Rectangle(0, -10, 311, 120),
                hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            })
            .on('pointerdown', () => this.scene.start('Game'))
            .on('pointerover', () => replay.setPipeline('Invert'))
            .on('pointerout', () => replay.resetPipeline());
    }
}
