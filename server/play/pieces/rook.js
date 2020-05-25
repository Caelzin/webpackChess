const Pos = require('../positions');
const Base = require('./base')

module.exports = class Rook extends Base {

    constructor(color, position) {
        super(color, position);
        this._type = 'rook';
    }

    canMove(after, map) {
        let canMove = super.canMove(after, map);

        if (Pos.xSubtract(after, this.position) !== 0
            && Pos.ySubtract(after, this.position) !== 0) {
            canMove = false;
        }

        canMove = this.hasObstructionByWay(after, map) ? false : canMove;

        return canMove;
    }


}