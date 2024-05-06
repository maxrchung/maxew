import { Scene } from 'phaser';

export const COLLISIONS = [
    [238, -68, 964, -4],
    [-6, -8, 960, 2],
    [-1, -9600, 60, 1],
    [898, -9338, 960, 1],
    [299, -128, 962, -68],
    [366, -190, 960, -125],
    [511, -322, 900, -187],
    [453, -246, 537, -180],
    [576, -375, 903, -320],
    [656, -432, 909, -370],
    [729, -481, 903, -427],
    [854, -617, 904, -477],
    [804, -801, 903, -613],
    [88, -501, 179, -330],
    [171, -430, 248, -236],
    [244, -341, 315, -266],
    [275, -594, 345, -530],
    [402, -641, 479, -568],
    [557, -637, 763, -565],
    [667, -689, 767, -592],
    [723, -735, 818, -659],
    [865, -1385, 910, -797],

    [613, -867, 667, -802],

    [494, -1005, 555, -946],
    [494, -970, 581, -800],
    [326, -1098, 455, -803],
    [155, -1203, 270, -800],
    [54, -1290, 115, -799],
    [158, -1400, 933, -1372],
    [224, -1500, 917, -1436],
    [188, -1446, 916, -1398],

    [286, -1608, 344, -1493],
    [332, -1510, 730, -1470],
    [417, -1617, 477, -1504],
    [566, -1648, 622, -1502],

    [678, -1671, 741, -1496],
    [614, -1545, 685, -1504],
    [728, -1567, 906, -1497],
    [795, -1782, 908, -1501],
    [875, -2132, 903, -1772],
    [601, -2470, 910, -2387],
    [770, -2386, 915, -2025],

    [775, -2845, 920, -2460],

    [109, -2428, 204, -2324],
    [289, -2567, 322, -2534],
    [458, -2731, 490, -2699],
    [648, -2840, 680, -2815],
    [883, -3235, 906, -2851],

    [580, -3570, 722, -3276],

    [46, -3294, 642, -3113],
    [44, -3114, 422, -2886],
    [521, -3133, 600, -3051],
    [633, -3280, 686, -3149],
    [31, -4268, 602, -3285],
    [54, -5121, 660, -3954],
    [643, -4807, 743, -4035],
    [701, -4865, 755, -4702],
    [734, -4766, 780, -4122],
    [769, -4630, 830, -4553],

    [767, -4332, 818, -4287],
    [769, -4701, 800, -4227],

    [848, -4085, 910, -4020],
    [872, -4821, 929, -4754],
    [858, -5053, 920, -4973],
    [51, -5195, 675, -5161],
    [641, -5164, 730, -5104],

    [522, -5268, 621, -5175],
    [732, -5460, 863, -5352],
    [830, -5711, 937, -5306],
    [102, -5369, 192, -5263],
    [672, -5967, 739, -5852],
    [838, -6163, 911, -6057],
    [655, -6365, 741, -6275],
    [449, -6607, 680, -5732],
    [506, -5746, 625, -5523],
    [404, -5539, 550, -5360],
    [265, -5487, 434, -5382],
    [45, -5621, 118, -5541],
    [218, -5887, 282, -5812],
    [48, -6099, 113, -6019],
    [212, -6335, 283, -6254],
    [260, -6454, 515, -5667],
    [361, -5699, 527, -5461],
    [308, -5694, 369, -5563],
    [367, -6536, 459, -6447],
    [546, -6759, 902, -6559],
    [612, -6851, 909, -6749],
    [419, -6811, 463, -6757],
    [269, -6929, 363, -6815],
    [44, -7062, 229, -6873],
    [333, -7185, 909, -7105],
    [817, -7125, 919, -6954],
    [443, -7220, 911, -7182],
    [834, -7285, 916, -7175],
    [45, -7333, 82, -7127],
    [767, -7258, 842, -7212],
    [843, -7543, 903, -7473],
    [852, -7839, 904, -7761],
    [674, -8068, 734, -7987],
    [866, -8346, 919, -8267],
    [654, -8619, 704, -8540],
    [645, -8909, 712, -8826],
    [846, -9100, 903, -9018],
    [49, -7507, 683, -7455],
    [41, -7472, 547, -7394],
    [328, -7550, 417, -7503],
    [47, -7588, 180, -7495],
    [267, -7750, 400, -7667],
    [50, -7979, 112, -7847],
    [219, -8196, 304, -8104],
    [246, -8510, 332, -8417],
    [56, -8679, 110, -8538],
    [243, -8948, 323, -8829],
    [261, -9181, 322, -9113],
    [36, -7405, 336, -7355],
    [48, -9397, 103, -9198],
    [-4, -9609, 952, -9558],
    [309, -9346, 959, -9281],
    [302, -9287, 407, -7692],
    [278, -8277, 310, -7978],
    [402, -8213, 418, -7877],
    [397, -9295, 546, -9241],
    [530, -9008, 655, -8818],
    [549, -8826, 671, -8393],
    [572, -8402, 678, -7711],
    [586, -7726, 692, -7487],
    [569, -9458, 694, -9379],
    [618, -9384, 647, -9339],

    [408, -2099, 476, -1983],
    [603, -1937, 672, -1865],
    [259, -2236, 336, -2141],

    [842, -3065, 893, -3006],
    [849, -3363, 903, -3311],
    [853, -3620, 899, -3564],

    [848, -3825, 903, -3782],

    [899, -9567, 964, -9345], //door
];

// export const START_POS = [101, -110];
export const START_POS = [780, -2961];

export class CollisionTester extends Scene {
    constructor() {
        super('CollisionTester');
    }

    preload() {
        this.load.setPath('assets');
        this.load.image('testblock', 'testblock.png');
        this.load.image('testweirdblock', 'testweirdblock.png');

        this.start = null;
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

        for (const [x, y, x2, y2] of COLLISIONS) {
            const collision = this.add.rectangle(
                x,
                y,
                x2 - x,
                y2 - y,
                0xff0000,
                0.5
            );
            collision.setOrigin(0, 0);
            const text = this.add.text(x, y, `${x},${y}`);
            text.setOrigin(0, 0);
        }

        this.player = this.add.sprite(START_POS[0], START_POS[1], 'idle0');
        this.player.setOrigin(0, 0);
        this.rect = this.add.rectangle(
            START_POS[0],
            START_POS[1],
            100,
            100,
            0xff0000,
            0.5
        );
        this.rect.setOrigin(0, 0);

        this.input.on('pointerdown', () => {
            if (!this.start) {
                this.start = [this.player.x, this.player.y];
            } else {
                console.log('Copied');
                navigator.clipboard.writeText(
                    `[${this.start[0]}, ${this.start[1]}, ${this.player.x}, ${this.player.y}],\n`
                );
                this.start = null;
            }
        });
    }

    update(time, delta) {
        let x = this.player.x;
        let y = this.player.y;
        let move = 1;

        if (this.keys2.shift.isDown) {
            move = 10;
        }

        if (this.keys.left.isDown || this.keys2.left.isDown) {
            x -= move;
        }

        if (this.keys.right.isDown || this.keys2.right.isDown) {
            x += move;
        }

        if (this.keys.up.isDown || this.keys2.up.isDown) {
            y -= move;
        }

        if (this.keys.down.isDown || this.keys2.down.isDown) {
            y += move;
        }

        this.player.setPosition(x, y);
        this.rect.setPosition(x, y);

        this.cameras.main.startFollow(this.player);

        if (this.keys2.escape.isDown) {
            this.sound.add('nice', { volume: 0.5 }).play();
            this.scene.start('Game');
        }

        console.log('Position: ', x, y);
    }
}
