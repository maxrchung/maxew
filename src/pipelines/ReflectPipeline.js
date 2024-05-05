const fragShader = `
    precision mediump float;
    varying vec2 outTexCoord;
    uniform sampler2D uMainSampler;

    void main() {
        float distFromXMid = abs(gl_FragCoord.x - 960.0);
        float distFromYMid = abs(gl_FragCoord.y - 540.0);

        float threshold = 333.0;

        float cutoff = (540.0 - threshold) * (distFromXMid / 960.0) + threshold;

        if (distFromYMid > cutoff) {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        } else {
            

            gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
        }
    }
`;

export class ReflectPipeline extends Phaser.Renderer.WebGL.Pipelines
    .PostFXPipeline {
    constructor(game) {
        super({ game, fragShader });
    }

    onPreRender() {
        console.log('asdf');
    }
}
