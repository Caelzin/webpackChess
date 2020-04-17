const Pos = require('../positions');
const Base = require('./base')

module.exports = class Pawn extends Base {
    constructor(color, position) {
        super(color, position);
        this._type = 'pawn';
        if (color === 'white') {
            this._pieceDirection = 1;
        } else {
            this._pieceDirection = -1;
        }
    }

    canMove(after, map, step) {
        if (super.canMove(after, map) === false)
            return false;
        let canMove = false;

        if (Pos.xSubtract(after, this.position) === 0) {
            if (Pos.ySubtract(after, this.position) * this.pieceDirection === 2 //двойной прыжок
                && this.firstStep === null
                || Pos.ySubtract(after, this.position) * this.pieceDirection === 1) {
                if (!this.hasObstructionByWay(after + this._pieceDirection * this._size, map)) { //одиночный ход
                    canMove = true;
                }
            } //а с эти ифом шо делать? объединять?

        } else if (Math.abs(Pos.xSubtract(after, this.position)) === 1
            && Pos.ySubtract(after, this.position) * this.pieceDirection === 1) {


            if (map.enemy(this.color).has(after)) {
                canMove = true;
            } else if (map.enemy(this.color).has(Pos.oneDimFrom(after, this.position))) {
                let enemy = map.enemy(this.color).get(Pos.oneDimFrom(after, this.position));
                if (enemy.firstStep === step - 1) {
                    canMove = true;
                }
            }
        }


        return canMove;
    }

    doMove(after, map, step) {
        if (Math.abs(Pos.xSubtract(after, this.position)) === 1 && !map.enemy(this.color).has(after)) {
            //=> на проходе

            map.delete(Pos.oneDimFrom(after, this.position));
            map.movePiece(this.position, after, step);

        } else {
            return super.doMove(after, map, step);
        }

        if (this.color === 'white' && Pos.y(after) === this._size
            || this.color === 'black' && Pos.y(after) === 0) {
            //TODO выбор новой фигуры
        }
    }

    get pieceDirection() {
        return this._pieceDirection;
    }
} //TODO doMove для конца поля