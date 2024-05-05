import { Scene } from 'phaser';

export class Game extends Scene {
    constructor() {
        super('Game');
    }

    create() {
        // Uncomment to apply distortion effect
        // this.cameras.main.setPostPipeline('Reflect');

        this.cameras.main.setBackgroundColor(0x00ff00);

        this.anims.create({
            key: 'walk',
            frames: [
                { key: 'walk0' },
                { key: 'walk1' },
                { key: 'walk2' },
                { key: 'walk3' },
            ],
            frameRate: 12,
            repeat: -1,
        });
        this.anims.create({
            key: 'idle',
            frames: [
                { key: 'idle0' },
                { key: 'idle1' },
                { key: 'idle2' },
                { key: 'idle3' },
            ],
            frameRate: 12,
            repeat: -1,
        });

        this.add.sprite(512, 384, 'idle0').play('idle');

        this.input.once('pointerdown', () => {
            this.scene.start('GameOver');
        });
    }
}
