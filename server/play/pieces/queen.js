const Pos = require('../positions');
const Base = require('./base')

module.exports = class Queen extends Base {
    constructor(color, position) {
        super(color, position);
        this._type = 'queen';
    }

    canMove(after, map) {
        let canMove = super.canMove(after, map);

        if (Math.abs(Pos.xSubtract(after, this.position)) !== Math.abs(Pos.ySubtract(after, this.position))
            && Pos.xSubtract(after, this.position) !== 0
            && Pos.ySubtract(after, this.position) !== 0) {
            canMove = false;
        }

        canMove = this.hasObstructionByWay(after, map) ? false : canMove;

        return canMove;
    }
}