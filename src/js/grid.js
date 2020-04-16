//в будущем замена на парс html-строки. Или превращение в dom-узел. Или в смене способа вставки (См. дневник 06.04)
import svgPawnBlack from '@src/assets/svg/pieces/pawn_black.svg'
import svgPawnWhite from '@src/assets/svg/pieces/pawn_white.svg'
import svgRookBlack from '@src/assets/svg/pieces/rook_black.svg'
import svgRookWhite from '@src/assets/svg/pieces/rook_white.svg'
import svgBishopBlack from '@src/assets/svg/pieces/bishop_black.svg'
import svgBishopWhite from '@src/assets/svg/pieces/bishop_white.svg'
import svgQueenBlack from '@src/assets/svg/pieces/queen_black.svg'
import svgQueenWhite from '@src/assets/svg/pieces/queen_white.svg'
import svgKingBlack from '@src/assets/svg/pieces/king_black.svg'
import svgKingWhite from '@src/assets/svg/pieces/king_white.svg'
import svgKnightBlack from '@src/assets/svg/pieces/knight_black.svg'
import svgKnightWhite from '@src/assets/svg/pieces/knight_white.svg'

export default class Grid extends Map { //TODO экспорить класс или экземпляр класса на серве?
    constructor(parent) {
        super();
        this._hvalues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        this._size = 8;
        this._parent = document.createElement('div');
        this._parent.id = 'deck';
        parent.append(this._parent);
        this.generateGrid();
        this.fill();
    }

    getCellPosition(link) {
        for (let entry of this) {
            if (entry[1] === link) { //TODO есть ли .value & .key? [x] не интуитивен
                return entry[0];
            }
        }
        return null;
    }

    fill() {
        let columns = this._parent.childNodes; //возьмутся все columns?

        for (let i = 0; i < this._size; i++) {
            let line = columns[i + 1].childNodes;
            for (let j = 0; j < this._size; j++) {
                this.set((this._size - j - 1) * this._size + i, line[j + 1]);
                //Сложная формула просто переворачивает по вертикали отсчет так, чтобы шел снизу вверх
                //т.е. позиция {0, 0} В левом нижнем углу, а потом приводит к одномассивной координате
            }
        }
    }

    generateGrid() {
        this.generateNumberColumn();
        for (let i = 0; i < this._size; i++) {
            this.generateColumn(i);
        }
        this.generateNumberColumn();
    }

    generateNumberColumn() {
        let column = this.generateDiv('column');

        column.append(this.generateDiv('label'));
        for (let j = 0; j < this._size; j++) {
            column.append(this.generateDiv('label', this._size - j));
        }
        column.append(this.generateDiv('label'));

        this._parent.append(column);
    }

    generateColumn(i) {
        let column = this.generateDiv('column');

        column.append(this.generateDiv('label', this._hvalues[i]));

        for (let i = 0; i < this._size; i++) {
            column.append(this.generateDiv('cell'));
        }

        column.append(this.generateDiv('label', this._hvalues[i]));

        this._parent.append(column);
    }

    generateDiv(divClassName, innerText) {
        let div = document.createElement('div');
        div.className = divClassName;
        if (innerText) {
            div.innerText = innerText;
        }
        return div;
    }

    draw(jsonGrid) {
        for (let entry of this) {
            entry[1].innerHTML = '';
        }
        for (let piece of jsonGrid) {
            switch (piece.type) {
                case 'pawn':
                    this.get(piece.position).innerHTML = piece.color === 'white' ?
                        this.get(piece.position).innerHTML = svgPawnWhite :
                        this.get(piece.position).innerHTML = svgPawnBlack;
                    break;
                case 'knight':
                    this.get(piece.position).innerHTML = piece.color === 'white' ?
                        this.get(piece.position).innerHTML = svgKnightWhite :
                        this.get(piece.position).innerHTML = svgKnightBlack;
                    break;
                case 'bishop':
                    this.get(piece.position).innerHTML = piece.color === 'white' ?
                        this.get(piece.position).innerHTML = svgBishopWhite :
                        this.get(piece.position).innerHTML = svgBishopBlack;
                    break;
                case 'rook':
                    this.get(piece.position).innerHTML = piece.color === 'white' ?
                        this.get(piece.position).innerHTML = svgRookWhite :
                        this.get(piece.position).innerHTML = svgRookBlack;
                    break;
                case 'queen':
                    this.get(piece.position).innerHTML = piece.color === 'white' ?
                        this.get(piece.position).innerHTML = svgQueenWhite :
                        this.get(piece.position).innerHTML = svgQueenBlack;
                    break;
                case 'king':
                    this.get(piece.position).innerHTML = piece.color === 'white' ?
                        this.get(piece.position).innerHTML = svgKingWhite :
                        this.get(piece.position).innerHTML = svgKingBlack;
                    break;
                default:
                //TODO кинуть ошибку
            }
        }
    }

    /**
     *
     * @param target - ссылка на div.cell
     * @param jsonGrid
     * @returns {boolean|any} - Возвращает объект из массива jsonGrid, если фигура имеется
     */
    hasPiece (target, jsonGrid) {
        if (!target || target.className !== 'cell') {
            return false;
        }
        for (let i of jsonGrid) {
            if (i.position === this.getCellPosition(target)) {
                return i;
            }
        }
    }
};