const Bishop = require('./pieces/bishop');
const King = require('./pieces/king');
const Knight = require('./pieces/knight');
const Pawn = require('./pieces/pawn');
const Queen = require('./pieces/queen');
const Rook = require('./pieces/rook');


module.exports = class PieceMap extends Map {

    constructor() {
        super();
        this._starterPack = [
            {type: 'pawn', position: 8, color: 'white'},
            {type: 'pawn', position: 9, color: 'white'},
            {type: 'pawn', position: 10, color: 'white'},
            {type: 'pawn', position: 11, color: 'white'},
            {type: 'pawn', position: 12, color: 'white'},
            {type: 'pawn', position: 13, color: 'white'},
            {type: 'pawn', position: 14, color: 'white'},
            {type: 'pawn', position: 15, color: 'white'},
            {type: 'rook', position: 0, color: 'white'},
            {type: 'rook', position: 7, color: 'white'},
            {type: 'knight', position: 1, color: 'white'},
            {type: 'knight', position: 6, color: 'white'},
            {type: 'bishop', position: 2, color: 'white'},
            {type: 'bishop', position: 5, color: 'white'},
            {type: 'queen', position: 3, color: 'white'},
            {type: 'king', position: 4, color: 'white'},
            {type: 'pawn', position: 48, color: 'black'},
            {type: 'pawn', position: 49, color: 'black'},
            {type: 'pawn', position: 50, color: 'black'},
            {type: 'pawn', position: 51, color: 'black'},
            {type: 'pawn', position: 52, color: 'black'},
            {type: 'pawn', position: 53, color: 'black'},
            {type: 'pawn', position: 54, color: 'black'},
            {type: 'pawn', position: 55, color: 'black'},
            {type: 'rook', position: 56, color: 'black'},
            {type: 'rook', position: 63, color: 'black'},
            {type: 'knight', position: 57, color: 'black'},
            {type: 'knight', position: 62, color: 'black'},
            {type: 'bishop', position: 58, color: 'black'},
            {type: 'bishop', position: 61, color: 'black'},
            {type: 'queen', position: 59, color: 'black'},
            {type: 'king', position: 60, color: 'black'},
        ];
    }

    fillFromStarterPack() {
        for (let i of this._starterPack) {
            this.set(i.position, this.createPiece(i));
        }
    }

    fillNewMap(map) {
        for (let i of map.values()) {
            let piece = this.createPiece({type: i.type, position: i.position, color: i.color});
            if (i.firstStep) {
                piece.firstStep = i.firstStep;
            }
            this.set(piece.position, piece);

        }
    }

    /**
     * Возвращает Map, содержащий все фигуры белого цвета
     * @returns
     */
    white() {
        return this.fromColor('white');
    }

    /**
     * Возвращает Map, содержащий все фигуры черного цвета
     * @returns
     */
    black() {
        return this.fromColor('black');
    }

    friendly(color) {
        if (color === 'white') {
            return this.white();
        } else if (color === 'black') {
            return this.black();
        }
    }

    enemy(color) {
        if (color === 'white') {
            return this.black();
        } else if (color === 'black') {
            return this.white();
        }
    }


    findKingPosition(color) {
        if (!color) {
            for (let entry of this.friendly(this.color).values()) {
                if (entry.type === 'king') {
                    return entry.position;
                }
            }
        } else {
            for (let entry of this.friendly(color).values()) {
                if (entry.type === 'king') {
                    return entry.position;
                }
            }
        }

    }

    willKingProtected(before, after, map, step) {
        let target = this.get(before);

        for (let i of this.enemy(target.color).keys()) {

            let newMap = new PieceMap();
            newMap.fillNewMap(map);

            newMap.makeMove(before, after, step);

            let tempPiece = newMap.get(i);
            if (tempPiece.canMove(newMap.findKingPosition(target.color), newMap, step)) {
                return false;
            }
            newMap.set(tempPiece.position, tempPiece);
        }
        return true;
    }

    isCellProtected(position, color, step) {
        for (let i of this.enemy(color)) {
            if (i[1].canMove(position, this, step)) {
                return false;
            }
        }
        return true;
    }

    createPiece({type, position, color}) {
        let piece;

        switch (type) {
            case 'pawn':
                piece = new Pawn(color, position);
                break;
            case 'knight':
                piece = new Knight(color, position);
                break;
            case 'bishop':
                piece = new Bishop(color, position);
                break;
            case 'rook':
                piece = new Rook(color, position);
                break;
            case 'queen':
                piece = new Queen(color, position);
                break;
            case 'king':
                piece = new King(color, position);
                break;
        }

        return piece;
    }

    toJSON() {
        let array = [];
        for (let piece of this.values()) {
            let object = {
                type: piece.type,
                color: piece.color,
                position: piece.position,
                moves: piece.moveAbilityArray(this, 0) //вызывается при начале игры, => ход = 0
            }
            array.push(object);
        }
        return JSON.stringify(array);
    }

    replaceWith({before: before, after: after, transformType: newType}) {
        if (this.has(before)) {
            let moves = this.get(before).moveAbilityArray(this, 0);
            for (let i of moves) {
                if (i === after) {
                    if (newType) {
                        this.transformPawn(before, newType);
                    }
                    this.makeMove(before, after);
                    return this.toJSON();
                }
            }
        }
        return false;
    }

    makeMove(before, after, step) {
        let piece = this.get(before);
        this.delete(after);
        this.delete(before);
        this.set(after, piece);
        piece.position = after;
        piece.firstStep = step;
    }

    isMoveAvailable(data) {
        let jsonGrid = this.toJSON();
        jsonGrid = JSON.parse(jsonGrid);
        if (jsonGrid) {
            for (let i = 0; i < jsonGrid.length; i++) {
                if (jsonGrid[i].position === data.before) {
                    for (let j = 0; j < jsonGrid[i].moves.length; j++) {
                        if (jsonGrid[i].moves[j] === data.after) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }

    /**
     * Создает фигуру на ТОМ ЖЕ месте
     * @param position
     * @param targetType
     */
    transformPawn(position, targetType) {
        let color = this.get(position).color;
        this.delete(position);
        let newPiece = this.createPiece({type: targetType, position: position, color: color});
        this.set(position, newPiece);
    }

    /**
     * Возвращает набор значений, подходящих по цвету
     * @param color
     * @private
     */
    fromColor(color) {
        let newMap = new Map();
        for (let entry of this.values()) {
            if (entry.color === color) {
                newMap.set(entry.position, entry);
            }
        }
        return newMap;
    }
}
