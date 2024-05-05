import {Scene} from 'phaser';

export class Game extends Scene {
    constructor() {
        super('Game');
    }

    create() {
        // Uncomment to apply distortion effect
        // this.cameras.main.setPostPipeline('Reflect');
        this.cameras.main.setBackgroundColor(0x00ff00);

        this.keys = this.input.keyboard.createCursorKeys();
        this.keys2 = this.input.keyboard.addKeys({
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
            space: Phaser.Input.Keyboard.KeyCodes.SPACE,
            shift: Phaser.Input.Keyboard.KeyCodes.SHIFT,
        });

        this.anims.create({
            key: 'walk',
            frames: [{key: 'walk0'}, {key: 'walk1'}, {key: 'walk2'}, {key: 'walk3'},],
            frameRate: 12,
            repeat: -1,
        });
        this.anims.create({
            key: 'idle',
            frames: [{key: 'idle0'}, {key: 'idle1'}, {key: 'idle2'}, {key: 'idle3'},],
            frameRate: 12,
            repeat: -1,
        });

        this.player = this.physics.add.sprite(512, 384, 'idle0').play('idle')
        this.player.body.setSize(38, 100)

        var ground = this.add.rectangle(0, this.cameras.main.height, this.cameras.main.width, 100, 0xFF000000);
        ground.setOrigin(0, 1); // Set the origin to the top-left corner

        // Add the rectangle to the physics world as a static group
        var groundGroup = this.physics.add.staticGroup();
        groundGroup.add(ground);

        // Add a collider between the player and the rectangle
        this.physics.add.collider(this.player, groundGroup);
    }

    update(time, delta) {
        if (this.keys.left.isDown || this.keys2.left.isDown) {
            this.player.setVelocityX(-160);
            this.player.setFlipX(true);
            this.player.play('walk', true);
        } else if (this.keys.right.isDown || this.keys2.right.isDown) {
            this.player.setVelocityX(160);
            this.player.setFlipX(false);
            this.player.play('walk', true);
        } else {
            this.player.setVelocityX(0);
            this.player.play('idle', true);
        }

        if (this.keys.space.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-330);
        }
        if (!this.keys.space.isDown) {
            this.player.body.setGravity(0, 1200);
        } else {
            this.player.body.setGravity(0, 300);
        }
    }
}
