const gridSize = 8;

export default class Pos {

    static x(position) {
        return (position % gridSize);
    }

    static y(position) {
        return Math.floor(position / gridSize);
    }

    static oneDim(x, y) {
        return y * gridSize + x;
    }

    static oneDimFrom(first, second) {
        return this.oneDim(this.x(first), this.y(second));
    }

    static xSubtract(first, second) {
        return this.x(first) - this.x(second);
    }

    static ySubtract(first, second) {
        return this.y(first) - this.y(second);
    }
}