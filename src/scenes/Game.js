import { Scene } from 'phaser';
import { COLLISIONS, START_POS } from './CollisionTester';

const JUMP_HEIGHT = 5;
const TIME_TO_JUMP_APEX = 0.12;
const UPWARD_MOVEMENT_MULTIPLIER = 1.0;
const DOWNWARD_MOVEMENT_MULTIPLIER = 5.23;
const RELEASE_GRAVITY_MULTIPLIER = 5.23;
const TERMINAL_VELOCITY = 999.0;
const COYOTE_TIME = 0.15;
const MAX_SPEED = 250.0;
const MAX_ACCELERATION = 740.0;
const MAX_DECELERATION = 740.0;
const MAX_TURN_SPEED = 999.0;

const GRAVITY = (2 * JUMP_HEIGHT) / (TIME_TO_JUMP_APEX * TIME_TO_JUMP_APEX);

export class Game extends Scene {
    constructor() {
        super('Game');

        this.gravityMultiplier = 1.0;
        this.jumpRequested = false;
        this.jumpBufferCounter = 0;
        this.currentlyJumping = false;
        this.coyoteTimeCounter = 0;
    }

    create() {
        // Uncomment to apply distortion effect
        // this.cameras.main.setPostPipeline('Reflect');

        this.keys = this.input.keyboard.createCursorKeys();
        this.keys2 = this.input.keyboard.addKeys({
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
            space: Phaser.Input.Keyboard.KeyCodes.SPACE,
            shift: Phaser.Input.Keyboard.KeyCodes.SHIFT,
            escape: Phaser.Input.Keyboard.KeyCodes.ESC,
        });

        const backLeft = this.add.rectangle(0, -9600, 960, 9600, 0xffffff);
        backLeft.setOrigin(0, 0);

        const backRight = this.add.rectangle(960, -9600, 960, 9600, 0x000000);
        backRight.setOrigin(0, 0);

        const mapLeft = this.add.image(0, -9600, 'map');
        mapLeft.setOrigin(0, 0);

        const mapRight = this.add.image(960, -9600, 'map');
        mapRight.setOrigin(0, 0);
        mapRight.flipX = true;

        this.anims.create({
            key: 'walk',
            frames: [
                {key: 'walk0'},
                {key: 'walk1'},
                {key: 'walk2'},
                {key: 'walk3'},
                {key: 'walk4'},
                {key: 'walk5'},
                {key: 'walk6'},
                {key: 'walk7'},
            ],
            frameRate: 30,
            repeat: -1,
        });
        this.anims.create({
            key: 'walk_jump_warmup',
            frames: [
                {key: 'walk_jump06'},
                {key: 'walk_jump07'},
                {key: 'walk_jump08'},
                {key: 'walk_jump09'},
                {key: 'walk_jump10'},
            ],
            frameRate: 30,
            repeat: 0,
        });
        this.anims.create({
            key: 'walk_jump_loop',
            frames: [
                {key: 'walk_jump11'},
                {key: 'walk_jump12'},
                {key: 'walk_jump13'},
                {key: 'walk_jump14'},
                {key: 'walk_jump15'},
            ],
            frameRate: 12,
            repeat: -1,
        });
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

        this.player = this.physics.add
            .sprite(START_POS[0], START_POS[1], 'idle0')
            .play('idle');
        this.player.setPipeline('Clone');
        this.player.body.setSize(38, 100);
        this.player.on('animationcomplete', (animation) => {
            if (animation.key === 'walk_jump_warmup') {
                this.player.play('walk_jump_loop');
            }
        });

        // Add the rectangle to the physics world as a static group
        const collisionGroup = this.physics.add.staticGroup();
        for (const [x, y, x2, y2] of COLLISIONS) {
            const rect = this.add.rectangle(x, y, x2 - x, y2 - y, 0x000000, 0);
            rect.setOrigin(0, 0); // Should be top left corner
            collisionGroup.add(rect);
        }

        // Add a collider between the player and the rectangle
        this.physics.add.collider(this.player, collisionGroup);

        this.cameras.main.startFollow(this.player, true, 1, 0.9);
        this.cameras.main.setBounds(0, -9600, 1920, 9600, true);
    }

    get_movement_vector() {
        var movement_vector = {x: 0, y: 0};
        if (this.keys.left.isDown || this.keys2.left.isDown) {
            movement_vector.x += 1;
        }
        if (this.keys.right.isDown || this.keys2.right.isDown) {
            movement_vector.x -= 1;
        }
        if (this.keys.space.isDown) {
            movement_vector.y += 1;
        }
        if (this.input.gamepad.pad1) {
            movement_vector.x += -this.input.gamepad.pad1.leftStick.x;
            if (this.input.gamepad.pad1.A) movement_vector.y += 1;
            if (this.input.gamepad.pad1.left) movement_vector.x += 1;
            if (this.input.gamepad.pad1.right) movement_vector.x -= 1;
        }
        // clamp each axis to [-1, 1]
        if (movement_vector.x > 1) {
            movement_vector.x = 1;
        } else if (movement_vector.x < -1) {
            movement_vector.x = -1;
        }
        if (movement_vector.y > 1) {
            movement_vector.y = 1;
        } else if (movement_vector.y < -1) {
            movement_vector.y = -1;
        }
        return movement_vector;
    }

    update(time, delta) {
        // Fucking hell use a second delta like a normal person
        delta = delta / 1000;

        // Recalculate gravity
        this.player.body.setGravity(0, GRAVITY * this.gravityMultiplier);

        var onGround = this.player.body.touching.down;
        var input = this.get_movement_vector();
        var jumpPressed = input.y > 0;
        var curVel = this.player.body.velocity;

        // MOVE
        var desiredXVel = input.x * MAX_SPEED;
        var maxSpeedChange = 0;
        if (input.x !== 0) {
            if (Math.sign(input.x) !== Math.sign(curVel.x)) {
                maxSpeedChange = MAX_TURN_SPEED * delta;
            } else {
                maxSpeedChange = MAX_ACCELERATION * delta;
            }
        } else {
            maxSpeedChange = MAX_DECELERATION * delta;
        }

        var step = Math.min(
            Math.abs(curVel.x) - Math.abs(desiredXVel),
            maxSpeedChange
        );
        if (curVel.x < desiredXVel) {
            this.player.setVelocityX(curVel.x + step);
        } else {
            this.player.setVelocityX(curVel.x - step);
        }

        // JUMP
        if (jumpPressed) {
            this.jumpRequested = true;
        }

        if (!this.currentlyJumping && !onGround) {
            this.coyoteTimeCounter += delta;
        } else {
            this.coyoteTimeCounter = 0;
        }

        if (curVel.y < -0.01) {
            if (onGround) {
                this.gravityMultiplier = 1;
            } else {
                if (jumpPressed && this.currentlyJumping) {
                    this.gravityMultiplier = UPWARD_MOVEMENT_MULTIPLIER;
                } else {
                    this.gravityMultiplier = RELEASE_GRAVITY_MULTIPLIER;
                }
            }
        } else if (curVel.y > 0.01) {
            if (onGround) {
                this.gravityMultiplier = 1;
            } else {
                this.gravityMultiplier = DOWNWARD_MOVEMENT_MULTIPLIER;
            }
        } else {
            if (onGround) {
                this.currentlyJumping = false;
            }
            this.gravityMultiplier = 1;
        }

        if (curVel.y > TERMINAL_VELOCITY) {
            this.player.setVelocityY(TERMINAL_VELOCITY);
        }

        if (this.jumpRequested) {
            if (
                onGround ||
                (this.coyoteTimeCounter > 0.03 &&
                    this.coyoteTimeCounter < COYOTE_TIME)
            ) {
                this.jumpRequested = false;
                this.jumpBufferCounter = 0;
                this.coyoteTimeCounter = 0;

                var jumpSpeed =
                    Math.sqrt(
                        2 * GRAVITY * this.gravityMultiplier * JUMP_HEIGHT
                    ) * 10;
                if (curVel.y > 0) {
                    jumpSpeed -= curVel.y;
                } else if (curVel.y < 0) {
                    jumpSpeed += curVel.y;
                }
                this.player.setVelocityY(curVel.y - jumpSpeed);
                this.currentlyJumping = true;
                this.player.play('walk_jump_warmup');
            }
            this.jumpRequested = false;
        }

        if (curVel.x > 0.01) {
            this.player.setFlipX(false);
        } else if (curVel.x < -0.01) {
            this.player.setFlipX(true);
        }

        if (onGround && !this.currentlyJumping) {
            if (curVel.x != 0) {
                this.player.play('walk', true);
            } else {
                this.player.play('idle', true);
            }
        }

        if (this.keys2.escape.isDown) {
            this.sound.add('nice', { volume: 0.5 }).play();
            this.scene.start('CollisionTester');
        }
    }
}
