// Hit area callback for buttons with an adjustment to account for shader distortion
export default function buttonAreaCallback(offsetY) {
    return (hitArea, x, y) => {
        if (
            x > hitArea.x &&
            x < hitArea.x + width &&
            y > hitArea.y + offsetY &&
            y < hitArea.y + offsetY + height
        ) {
            return true;
        }
        return false;
    };
}
