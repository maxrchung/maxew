export class ClonePipeline extends Phaser.Renderer.WebGL.Pipelines.MultiPipeline {
    constructor(game) {
        super({
            game
        });
    }

    tinyFlush() {
        var gl = this.gl;
        var vertexCount = this.vertexCount;
        var vertexSize = this.currentShader.vertexSize;

        if (this.active) {
            this.setVertexBuffer();

            if (vertexCount === this.vertexCapacity) {
                gl.bufferData(gl.ARRAY_BUFFER, this.vertexData, gl.DYNAMIC_DRAW);
            } else {
                gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.bytes.subarray(0, vertexCount * vertexSize));
            }

            gl.drawArrays(this.topology, 0, vertexCount);
        }
    }

    batchQuad(gameObject, x0, y0, x1, y1, x2, y2, x3, y3, u0, v0, u1, v1, tintTL, tintTR, tintBL, tintBR, tintEffect, texture, unit) {
        let hasFlushed = super.batchQuad(gameObject, x0, y0, x1, y1, x2, y2, x3, y3, u0, v0, u1, v1, tintTL, tintTR, tintBL, tintBR, tintEffect, texture, unit);
        let hasFlushed2 = super.batchQuad(gameObject, 1920 - x0, y0, 1920 - x1, y1, 1920 - x2, y2, 1920 - x3, y3, u0, v0, u1, v1, 0xFFFFFFFF, 0xFFFFFFFF, 0xFFFFFFFF, 0xFFFFFFFF, 1, texture, unit);
        return hasFlushed || hasFlushed2;
    }
}