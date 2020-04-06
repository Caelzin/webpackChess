import * as Piece from './pieces/pieces'

//TODO переименовать класс и файл
function createPiece({type, position, color}) {
    let piece;

    switch (type) {
        case 'pawn':
            piece = new Piece.Pawn(color, position);
            break;
        case 'knight':
            piece = new Piece.Knight(color, position);
            break;
        case 'bishop':
            piece = new Piece.Bishop(color, position);
            break;
        case 'rook':
            piece = new Piece.Rook(color, position);
            break;
        case 'queen':
            piece = new Piece.Queen(color, position);
            break;
        case 'king':
            piece = new Piece.King(color, position);
            break;
        default:
        //TODO кинуть ошибку
    }

    return piece;
}
export default class PieceMap extends Map {
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

    fill() {
        for (let i = 0; i < this._starterPack.length; i++) {
            this.set(this._starterPack[i].position, createPiece(this._starterPack[i]));
        }
    }

    fillNewMap(map) {
        for (let i of map) {
            this.set(i[0], createPiece({type: i[1].type, position: i[1].position, color: i[1].color}));
            this.get(i[0]).firstStep = i[1].firstStep;
        }
    }

    get white() {
        return this._fromColor('white');
    }

    get black() {
        return this._fromColor('black');
    }


    friendly(color) {
        if (color === 'white') {
            return this.white;
        } else if (color === 'black') {
            return this.black;
        }
    }

    enemy(color) {
        if (color === 'white') {
            return this.black;
        } else if (color === 'black') {
            return this.white;
        }
    }

    findKingPosition(color) {
        for (let entry of this) { //вместо this - что? перечисляемы ли мои функции?
            if (entry[1].type === 'king' && entry[1].color === color) {
                return entry[0];
            }
        }
    }

    willKingProtected(before, after, map, step) {
        let target = this.get(before);

        for (let i of this.enemy(target.color).keys()) {

            let newMap = new PieceMap();
            newMap.fillNewMap(map);

            newMap.movePiece(before, after, step);

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

    movePiece(before, after, step) { //TODO передавать степ, правильно? или глобально?
        let piece = this.get(before);
        this.delete(after);
        this.delete(before);
        this.set(after, piece);
        piece.position = after;
        piece.firstStep = step;
    }

    transformPawn(type, position, color) {
        //this.set(position, createPiece({type, position, color}));
    }

    _fromColor(color) {
        let newMap = new Map();
        for (let entry of this) {
            if (entry[1].color === color) {
                newMap.set(entry[0], entry[1]);
            }
        }
        return newMap;
    }
}
