const fragShader = `
    precision mediump float;
    varying vec2 outTexCoord;
    uniform sampler2D uMainSampler;

    void main() {
        vec4 color = texture2D(uMainSampler, outTexCoord);
        gl_FragColor = vec4(
            1.0 - color.r,
            1.0 - color.g,
            1.0 - color.b,
            color.a
        );
    }
`;

export class InvertPipeline extends Phaser.Renderer.WebGL.Pipelines
    .MultiPipeline {
    constructor(game) {
        super({ game, fragShader });
    }
}
