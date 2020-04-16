const Pos = require('../positions');
const Base = require('./base')

module.exports = class King extends Base {
    constructor(color, position) {
        super(color, position);
        this._type = 'king';
    }

    canMove(after, map, step) {
        let canMove = super.canMove(after, map);

        if (Math.abs(Pos.xSubtract(after, this.position)) === 2 &&
            Math.abs(Pos.ySubtract(after, this.position)) === 0 &&
            this.firstStep === null) {//рокировка
            let xDirection = this.direction('x', after);

            if (!map.isCellProtected(this.position, this.color, step)
                || !map.isCellProtected(this.position + xDirection, this.color, step)
                || !map.isCellProtected(this.position + xDirection * 2, this.color, step)) {
                canMove = false;
            }

            let rookPosition = xDirection === 1 ? Pos.oneDim(7, Pos.y(this.position)) : Pos.oneDim(0, (this.position)); //grid_size??
            if (!map.friendly(this.color).get(rookPosition)
                || map.friendly(this.color).get(rookPosition).firstStep !== null
                || this.hasObstructionByWay(rookPosition, map)
                || this.firstStep !== null) {
                canMove = false;
            }

        } else if (Math.abs(Pos.xSubtract(after, this.position)) > 1
            || Math.abs(Pos.ySubtract(after, this.position)) > 1) {
            canMove = false;
        } else {
            super.canMove(after, map);
        }
        return canMove;
    }

    doMove(after, map, step) {
        if (Math.abs(Pos.xSubtract(after, this.position)) === 2) {
            let xDirection = this.direction('x', after);
            let rookPosition = xDirection === 1 ? Pos.oneDim(7, Pos.y(this.position)) : Pos.oneDim(0, Pos.y(this.position));

            map.movePiece(rookPosition, this.position + xDirection, step);
            map.movePiece(this.position, after, step);
        } else {
            super.doMove(after, map, step);
        }


    }
}