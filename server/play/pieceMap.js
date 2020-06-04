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
        for (let i of this.keys()) {
             this.delete(i);
        }
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

    white() {
        return this.fromColor('white');
    }

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
        if (color && this.friendly(color)) {
            for (let entry of this.friendly(color).values()) {
                if (entry.type === 'king') {
                    return entry.position;
                }
            }
        }
    }

    willKingProtected(before, after, map, step) { //почему некоторые функции не определяются как изанные из других мест?
        let target = this.get(before);

        for (let i of this.enemy(target.color).keys()) {

            let newMap = new PieceMap();
            newMap.fillNewMap(map);

            let newPiece = newMap.get(before);
            newPiece.doMove(after, newMap, step);

            let tempPiece = newMap.get(i);
            if (tempPiece && tempPiece.canMove(newMap.findKingPosition(target.color), newMap, step)) {
                return false;
            }
            if (tempPiece) {
                newMap.set(tempPiece.position, tempPiece);
            }

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

    toJSON(step, filter) {
        let pieces = [];
        for (let piece of this.values()) {
            let object = {
                type: piece.type,
                color: piece.color,
                position: piece.position,
                moves: piece.moveAbilityArray(this, step)
            }
            if (step % 2 === 1 && piece.color === 'white'
                || step % 2 === 0 && piece.color === 'black') {
                object.moves = [];
            }

            pieces.push(object);
        }

        if (filter) {
            if (filter === 'white' || filter === 'black') {
                for (let entry of pieces) {
                    if (entry.color !== filter) {
                        entry.moves = [];
                    }
                }
            } else {
                for (let entry of pieces) {
                    entry.moves = [];
                }
            }

        }

        return JSON.stringify(pieces);
    }


    makeMove(before, after, map, step, targetType) {

        let piece = this.get(before);
        piece.doMove(after, map, step, targetType);

    }

    isMoveAvailable(data, step) {
        let jsonGrid = this.toJSON(step);
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
     * Возвращает набор значений, подходящих по цвету
     * @param color
     * @private
     */
    fromColor(color) {
        let newMap = new Map();
        for (let entry of this.values()) {
            if (entry && entry.color === color) {
                newMap.set(entry.position, entry);
            }
        }
        return newMap;
    }
}
