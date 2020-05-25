const Pos = require('../positions');
const Base = require('./base')

module.exports = class Knight extends Base {
    constructor(color, position) {
        super(color, position);
        this._type = 'knight';
    }

    canMove(after, map) {
        let canMove = super.canMove(after, map);
        let canMoveHere = false;

        if (Math.abs(Pos.xSubtract(after, this.position)) === 1 && Math.abs(Pos.ySubtract(after, this.position)) === 2
            || Math.abs(Pos.xSubtract(after, this.position)) === 2 && Math.abs(Pos.ySubtract(after, this.position)) === 1) {
            canMoveHere = true;
        }

        return (canMove && canMoveHere);
    }
}