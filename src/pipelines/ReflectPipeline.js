const fragShader = `
    precision mediump float;
    varying vec2 outTexCoord;
    uniform sampler2D uMainSampler;
    uniform sampler2D uBezelSampler;

    void main() {
        float threshold = 333.0;

        float distFromXMid = abs(gl_FragCoord.x - 960.0);
        float distFromYMid = abs(gl_FragCoord.y - 540.0);

        float cutoff = (540.0 - threshold) * (distFromXMid / 960.0) + threshold;

        if (distFromYMid > cutoff) {
            gl_FragColor = texture2D(uBezelSampler, vec2(gl_FragCoord.x / 1920.0, 1.0 - (gl_FragCoord.y / 1080.0)));
            return;
        }

        float cutoffRatio = distFromYMid / cutoff;
        float direction = gl_FragCoord.y >= 540.0 ? 1.0 : -1.0;
        float mappedRatio = 540.0 + 540.0 * cutoffRatio * direction;

        gl_FragColor = texture2D(uMainSampler, vec2(gl_FragCoord.x / 1920.0, mappedRatio / 1080.0));
    }
`;

export class ReflectPipeline extends Phaser.Renderer.WebGL.Pipelines.PostFXPipeline {
    constructor(game) {
        super({game, fragShader});
        this._bezelTexture = null;
    }

    onBoot() {
        var bezelTexture = this.game.textures.get('bezel').getSourceImage();
        this._bezelTexture = this.game.renderer.createTextureFromSource(bezelTexture, 1920, 1080, 0);
    }

    onPreRender() {
        this.bindTexture(this._bezelTexture, 8);
        this.set1i('uBezelSampler', 8);
    }

}
