const Pos = require('../positions');
const Base = require('./base')

module.exports = class Bishop extends Base {
    constructor(color, position) {
        super(color, position);
        this._type = 'bishop';
    }

    canMove(after, map) {
        let canMove = super.canMove(after, map);

        if (Math.abs(Pos.xSubtract(after, this.position)) !== Math.abs(Pos.ySubtract(after, this.position))) {
            canMove = false;
        }

        canMove = this.hasObstructionByWay(after, map) ? false : canMove;

        return canMove;
    }

}