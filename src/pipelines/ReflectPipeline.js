const fragShader = `
    precision mediump float;
    varying vec2 outTexCoord;
    uniform sampler2D uMainSampler;

    void main() {
        float threshold = 333.0;

        float distFromXMid = abs(gl_FragCoord.x - 960.0);
        float distFromYMid = abs(gl_FragCoord.y - 540.0);

        float cutoff = (540.0 - threshold) * (distFromXMid / 960.0) + threshold;

        if (distFromYMid > cutoff) {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
            return;
        }

        float cutoffRatio = distFromYMid / cutoff;
        float direction = gl_FragCoord.y >= 540.0 ? 1.0 : -1.0;
        float mappedRatio = 540.0 + 540.0 * cutoffRatio * direction;

        gl_FragColor = texture2D(uMainSampler, vec2(gl_FragCoord.x / 1920.0, mappedRatio / 1080.0));
    }
`;

export class ReflectPipeline extends Phaser.Renderer.WebGL.Pipelines
    .PostFXPipeline {
    constructor(game) {
        super({ game, fragShader });
    }
}
