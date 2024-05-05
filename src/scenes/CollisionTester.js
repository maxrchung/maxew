import { Scene } from 'phaser';

const blocks = [['map', 0, -9600]];

const collisions = [
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
    [223, -634, 305, -555],
    [402, -641, 479, -568],
    [557, -637, 763, -565],
    [667, -689, 767, -592],
    [723, -735, 818, -659],
    [865, -1385, 910, -797],
    [635, -851, 693, -779],
    [494, -1000, 581, -759],
    [326, -1098, 455, -803],
    [155, -1203, 270, -800],
    [54, -1290, 115, -799],
    [156, -1440, 915, -1367],
    [202, -1500, 917, -1436],
    [286, -1608, 344, -1493],
    [332, -1510, 730, -1470],
    [417, -1617, 477, -1504],
    [566, -1648, 622, -1502],
    [603, -1940, 676, -1860],
    [678, -1671, 741, -1496],
    [614, -1545, 685, -1504],
    [728, -1567, 906, -1497],
    [795, -1782, 908, -1501],
    [875, -2132, 903, -1772],
    [601, -2470, 910, -2387],
    [770, -2386, 915, -2025],
    [113, -2427, 202, -2323],
    [768, -2854, 920, -2460],
    [405, -2101, 478, -1994],
    [257, -2235, 340, -2143],
    [(109, -2428, 204, -2324)],
    [289, -2567, 322, -2534],
    [458, -2731, 490, -2699],
    [648, -2840, 680, -2815],
    [883, -3235, 906, -2851],
    [842, -3065, 909, -3009],
    [847, -3362, 908, -3313],
    [853, -3623, 905, -3561],
    [846, -3825, 896, -3784],
    [574, -3583, 738, -3265],
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
    [771, -4230, 824, -4179],
    [848, -4085, 910, -4020],
    [849, -4397, 908, -4328],
    [872, -4821, 929, -4754],
    [858, -5053, 920, -4973],
    [51, -5195, 723, -5095],
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

    [899, -9567, 964, -9345], //door
];

const startPosition = [426, -7356];

export class CollisionTester extends Scene {
    constructor() {
        super('CollisionTester');
    }

    preload() {
        this.load.setPath('assets');
        this.load.image('testblock', 'testblock.png');
        this.load.image('testweirdblock', 'testweirdblock.png');
        this.load.image('map', 'map.png');

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
        });

        for (const [key, x, y] of blocks) {
            const block = this.add.image(x, y, key);
            block.setOrigin(0, 0);
        }

        for (const [x, y, x2, y2] of collisions) {
            const collision = this.add.rectangle(
                x,
                y,
                x2 - x,
                y2 - y,
                0xff0000,
                0.5
            );
            collision.setOrigin(0, 0);
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

        console.log('Position: ', x, y);
    }
}
