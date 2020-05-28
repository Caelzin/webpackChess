const Pos = require('../positions');
const PieceMap = require('../pieceMap')

module.exports = class Base {
    /**
     *
     * @param color - Принимает значения 'black' или 'white'
     * @param {Number} position - Позиция на доске, считается слева направо, снизу вверх.
     */
    constructor(color, position) {
        this._size = 8; //TODO вынести куда-то, внести? Я запуталась
        this._firstStep = null;
        this._type = undefined;

        if (color !== 'white' && color !== 'black'
            || position >= this._size ** 2 && position < 0) {
            throw new Error('Некорректные параметры'); //не ловлю, ибо ТАКАЯ ошибка уже не пофиксится, лол
        }

        this._color = color;
        this._position = position;
    }

    /**
     * Функция проверяет, есть ли мешающиеся фигуры МЕЖДУ начальной и конечной точкой перемещения
     * Требуется для фигур, которые ходят по прямой (в т.ч. для диагонали)
     *
     * @param after
     * @param map
     * @returns {boolean}
     */
    hasObstructionByWay(after, map) {
        let canMove = true;

        let xDirection = this.direction('x', after);
        let yDirection = this.direction('y', after);

        let steps = xDirection !== 0 ? Pos.xSubtract(after, this.position) * xDirection :
            Pos.ySubtract(after, this.position) * yDirection;

        for (let i = 1; i < steps; i++) {
            if (map.has(Pos.oneDim(Pos.x(this.position) + i * xDirection,
                Pos.y(this.position) + i * yDirection))) {
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
        map.delete(after);
        map.delete(this.position);
        map.set(after, this);
        this.position = after;
        this.firstStep = step;
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

    /**
     *
     * @param type - Принимает значения 'pawn','knight','rook','bishop','queen' или 'king'
     */
    set type(type) {
        let availableTypes = [
            'pawn',
            'knight',
            'rook',
            'bishop',
            'queen',
            'king'
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

    /**
     *
     * @param {PieceMap}map
     * @param step
     * @returns {[]}
     */
    moveAbilityArray(map, step) {
        let links = [];

        for (let i = 0; i < this._size ** 2; i++) {
            if (!map.friendly(this.color).has(i) && this.canMove(i, map, step)) {
                if (map.willKingProtected(this.position, i, map, step)) {
                        links.push(i);
                }
            }
        }
        return links;
    }

    /**
     *
     * @param {string} direction - Принимает 'x' или 'y'
     * @param {number} after
     * @returns {number} - For x: 1=→, -1=←; For y: 1=↑, -1=↓.
     */
    direction(direction, after) {
        if (direction !== 'x' && direction !== 'y') {
            throw new TypeError('Направление задано некорректно. Допускается "x" и "y".')
        }
        let result;
        if (direction === 'x') {
            result = Pos.xSubtract(after, this.position) > 0 ? 1 : -1;
            if (Pos.xSubtract(after, this.position) === 0) {
                result = 0;
            }
        } else {
            result = Pos.ySubtract(after, this.position) > 0 ? 1 : -1;
            if (Pos.ySubtract(after, this.position) === 0) {
                result = 0;
            }
        }

        return result;
    }

}

