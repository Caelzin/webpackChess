//TODO Пойдет на сервер!
//TODO переместить в отдельные модули
import Pos from '../workWithPosition'


class Base {
    constructor(color, position) {
        this._firstStep = null;
        this._type = undefined;
        this._color = color;
        this._position = position;
    }

    hasObstructionByWay(after, map) {
        let canMove = true;

        let xDirection = Pos.xSubtract(after, this.position) > 0 ? 1 : -1;
        if (Pos.xSubtract(after, this.position) === 0) {
            xDirection = 0;
        }
        let yDirection = Pos.ySubtract(after, this.position) > 0 ? 1 : -1;
        if (Pos.ySubtract(after, this.position) === 0) {
            yDirection = 0;
        }

        let steps = xDirection !== 0 ? Pos.xSubtract(after, this.position) * xDirection :
            Pos.ySubtract(after, this.position) * yDirection;

        for (let i = 1; i < steps; i++) { //проверка МЕЖДУ ходами
            if (map.has(Pos.oneDim(Pos.x(this.position) + i * xDirection, Pos.y(this.position) + i * yDirection))) {
                canMove = false;
                break;
            }

        }

        return !canMove;
    }

    canMove(after, map) {
        let canMove = false;

        if (!(map.friendly(this.color).has(after)) &&
            this.position !== after) {
            canMove = true;
        }

        return canMove;

    }

    doMove(after, map, step) {
        //TODO сохранение убитого для отображения сбоку
        map.movePiece(this.position, after, step);
    }

    get firstStep() {
        return this._firstStep;
    }

    set firstStep(step) {
        if (this._firstStep === null) {
            this._firstStep = step;
        }
    }

    get type() {
        return this._type;
    }

    set type(type) {
        let availableTypes = [
            'pawn',
            'knight',
            'rook',
            'bishop',
            'queen',
            'king',
        ];
        let isAvailable = false;
        for (let availableType of availableTypes) {
            if (availableType === type) {
                isAvailable = true;
            }
        }

        if (isAvailable) {
            this._type = type;
        } else {
            //бросить ошибку
        }
    }

    get color() {
        return this._color;
    }

    get position() {
        return this._position;
    }

    set position(newPosition) {
        this._position = newPosition;
        return true;
    }

    moveAbility(map, deck, step) {
        let linkSet = new Set();

        for (let i = 0; i < gridSize ** 2; i++) {
            if (!map.friendly(this.color).has(i) && this.canMove(i, map, step)) {
                if (map.willKingProtected(this.position, i, map, step)) {
                    linkSet.add(deck.get(i));
                }
            }
        }
        return linkSet;
    }

}

class Bishop extends Base {
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

class King extends Base {
    constructor(color, position) {
        super(color, position);
        this._type = 'king';
    }

    canMove(after, map, step) {
        let canMove = super.canMove(after, map);

        if (Math.abs(Pos.xSubtract(after, this.position)) === 2 &&
            Math.abs(Pos.ySubtract(after, this.position)) === 0 &&
            this.firstStep === null) {//рокировка
            let xDirection = Pos.xSubtract(after, this.position) > 0 ? 1 : -1;

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
            let xDirection = (Pos.xSubtract(after, this.position)) / 2;
            let rookPosition = xDirection === 1 ? Pos.oneDim(7, Pos.y(this.position)) : Pos.oneDim(0, Pos.y(this.position));

            map.movePiece(rookPosition, this.position + xDirection, step);
            map.movePiece(this.position, after, step);
        } else {
            super.doMove(after, map, step);
        }


    }
}

class Knight extends Base {
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

class Pawn extends Base {
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
                if (!this.hasObstructionByWay(after + this._pieceDirection * gridSize, map)) { //одиночный ход
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

        if (this.color === 'white' && Pos.y(after) === gridSize
            || this.color === 'black' && Pos.y(after) === 0) {
            //TODO выбор новой фигуры
        }
    }

    get pieceDirection() {
        return this._pieceDirection;
    }
} //TODO doMove для конца поля

class Queen extends Base {
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

class Rook extends Base {

    constructor(color, position) {
        super(color, position);
        this._type = 'rook';
    }

    canMove(after, map) {
        let canMove = super.canMove(after, map);

        if (Pos.xSubtract(after, this.position) !== 0
            && Pos.ySubtract(after, this.position) !== 0) {
            canMove = false; //можно все-таки возвращать, чтобы не совершать лишней работы по проверке?..
        }

        canMove = this.hasObstructionByWay(after, map) ? false : canMove;

        return canMove;
    }


}

export {Bishop, King, Knight, Pawn, Queen, Rook}
