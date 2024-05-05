import { Scene } from 'phaser';

const blocks = [
    ['testblock', 300, 300],
    ['testblock', 400, 800],
    ['testblock', 100, 100],
    ['testblock', 500, 500],
    ['testblock', 0, 1000],
    ['testblock', 0, 500],
    ['testweirdblock', 50, -300],
];

const collisions = [
    [500, 500, 580, 580, 0],
    [60, -110, 725, 40, 0],
    [310, -300, 810, -120, 20],
];

const startPosition = [512, 384];

export class CollisionTester extends Scene {
    constructor() {
        super('CollisionTester');
    }

    preload() {
        this.load.setPath('assets');
        this.load.image('testblock', 'testblock.png');
        this.load.image('testweirdblock', 'testweirdblock.png');
    }

    create() {
        // Uncomment to apply distortion effect
        // this.cameras.main.setPostPipeline('Reflect');
        this.cameras.main.setBackgroundColor(0x00ff00);

        this.keys = this.input.keyboard.createCursorKeys();
        this.keys2 = this.input.keyboard.addKeys({
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
        });

        for (const [key, x, y] of blocks) {
            const block = this.add.image(x, y, key);
            block.setOrigin(0, 0);
        }

        for (const [x, y, x2, y2, degrees] of collisions) {
            const collision = this.add.rectangle(
                x,
                y,
                x2 - x,
                y2 - y,
                0xff0000,
                0.5
            );
            collision.setOrigin(0, 0);
            collision.setRotation((degrees * Math.PI) / 180);
        }

        this.player = this.add.sprite(
            startPosition[0],
            startPosition[1],
            'idle0'
        );
        this.player.setOrigin(0, 0);
        this.rect = this.add.rectangle(
            startPosition[0],
            startPosition[1],
            100,
            100,
            0xff0000,
            0.5
        );
        this.rect.setOrigin(0, 0);
    }

    update(time, delta) {
        let x = this.player.x;
        let y = this.player.y;

        if (this.keys.left.isDown || this.keys2.left.isDown) {
            x -= 2;
        }

        if (this.keys.right.isDown || this.keys2.right.isDown) {
            x += 2;
        }

        if (this.keys.up.isDown || this.keys2.up.isDown) {
            y -= 2;
        }

        if (this.keys.down.isDown || this.keys2.down.isDown) {
            y += 2;
        }

        this.player.setPosition(x, y);
        this.rect.setPosition(x, y);

        this.cameras.main.startFollow(this.player);

        console.log('Position: ', x, y);
    }
}
