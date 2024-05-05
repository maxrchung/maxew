import {Scene} from 'phaser';

export class Game extends Scene {
    constructor() {
        super('Game');
    }

    create() {
        // Uncomment to apply distortion effect
        this.cameras.main.setPostPipeline('Reflect');
        this.cameras.main.setBackgroundColor(0x00ff00);

        this.keys = this.input.keyboard.createCursorKeys();
        this.keys2 = this.input.keyboard.addKeys({
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
            space: Phaser.Input.Keyboard.KeyCodes.SPACE,
            shift: Phaser.Input.Keyboard.KeyCodes.SHIFT,
            escape: Phaser.Input.Keyboard.KeyCodes.ESC,
        });

        this.anims.create({
            key: 'walk',
            frames: [
                {key: 'walk0'}, {key: 'walk1'}, {key: 'walk2'}, {key: 'walk3'},
                {key: 'walk4'}, {key: 'walk5'}, {key: 'walk6'}, {key: 'walk7'},
            ],
            frameRate: 30,
            repeat: -1,
        });
        this.anims.create({
            key: 'walk_jump_warmup',
            frames: [
                {key: 'walk_jump00'}, {key: 'walk_jump01'}, {key: 'walk_jump02'}, {key: 'walk_jump03'},
                {key: 'walk_jump04'}, {key: 'walk_jump05'}, {key: 'walk_jump06'}, {key: 'walk_jump07'},
                {key: 'walk_jump08'}, {key: 'walk_jump09'}, {key: 'walk_jump10'},
            ],
            frameRate: 60,
            repeat: 0,
        });
        this.anims.create({
            key: 'walk_jump_loop',
            frames: [
                {key: 'walk_jump11'}, {key: 'walk_jump12'}, {key: 'walk_jump13'}, {key: 'walk_jump14'},
                {key: 'walk_jump15'},
            ],
            frameRate: 12,
            repeat: -1,
        })
        this.anims.create({
            key: 'idle',
            frames: [
                {key: 'idle0'},
                {key: 'idle1'},
                {key: 'idle2'},
                {key: 'idle3'},
            ],
            frameRate: 12,
            repeat: -1,
        });

        this.player = this.physics.add.sprite(512, 384, 'idle0').play('idle');
        this.player.body.setSize(38, 100);
        this.player.on('animationcomplete', (animation) => {
            if (animation.key === 'walk_jump_warmup') {
                this.player.play('walk_jump_loop');
            }
        });

        var ground = this.add.rectangle(
            0,
            this.cameras.main.height,
            this.cameras.main.width,
            100,
            0xff000000
        );
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
            if (this.player.body.touching.down)
                this.player.play('walk', true);
        } else if (this.keys.right.isDown || this.keys2.right.isDown) {
            this.player.setVelocityX(160);
            this.player.setFlipX(false);
            if (this.player.body.touching.down)
                this.player.play('walk', true);
        } else {
            this.player.setVelocityX(0);
            if (this.player.body.touching.down)
                this.player.play('idle', true);
        }

        if (this.keys.space.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-330);
            this.player.play('walk_jump_warmup');
            // This sounds seems to be triggering multiple times. It's pretty loud/annoying so I commented it out for now.
            // this.sound.add('jump', { volume: 0.5 }).play();
        }
        if (!this.keys.space.isDown) {
            this.player.body.setGravity(0, 1200);
        } else {
            this.player.body.setGravity(0, 300);
        }

        if (this.keys2.escape.isDown) {
            this.sound.add('nice', {volume: 0.5}).play();
            this.scene.start('GameOver');
        }
    }
}
