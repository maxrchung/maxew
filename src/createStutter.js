export default createStutter = (scene, key, x, y) => {
    scene.anims.create({
        key,
        frames: [{ key: key + '1' }, { key: key + '2' }],
        repeat: -1,
        frameRate: 2,
    });
    const sprite = scene.add.sprite(x, y);
    sprite.play(key);
    return sprite;
};
