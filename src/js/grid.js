import Pos from './workWithPosition'

//в будущем замена на парс html-строки. Или превращение в dom-узел. Или в смене способа вставки (См. дневник 06.04)
import svgPawnBlack from '@/assets/svg/pawn_black.svg'
import svgPawnWhite from '@/assets/svg/pawn_white.svg'
import svgRookBlack from '@/assets/svg/rook_black.svg'
import svgRookWhite from '@/assets/svg/rook_white.svg'
import svgBishopBlack from '@/assets/svg/bishop_black.svg'
import svgBishopWhite from '@/assets/svg/bishop_white.svg'
import svgQueenBlack from '@/assets/svg/queen_black.svg'
import svgQueenWhite from '@/assets/svg/queen_white.svg'
import svgKingBlack from '@/assets/svg/king_black.svg'
import svgKingWhite from '@/assets/svg/king_white.svg'
import svgKnightBlack from '@/assets/svg/knight_black.svg'
import svgKnightWhite from '@/assets/svg/knight_white.svg'

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
        return false;
    }

    fill() {
        let columns = this._parent.childNodes; //возьмутся все columns?

        for (let i = 0; i < this._size; i++) {
            let line = columns[i + 1].childNodes;
            for (let j = 0; j < this._size; j++) {
                this.set(Pos.oneDim(i, this._size - j - 1), line[j + 1]);
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

    draw(map) {
        for (let entry of this) {
            entry[1].innerHTML = '';
            let type, position = entry[0];
            if (map.has(position)) {
                //TODO переделать свитч
                type = map.get(position).type;
                let color = map.get(position).color;
                switch (type) {
                    //см. дневник от 06.04
                    case 'pawn':
                        this.get(position).innerHTML = color === 'white' ?
                            this.get(position).innerHTML = svgPawnWhite :
                            this.get(position).innerHTML = svgPawnBlack;
                        break;
                    case 'knight':
                        this.get(position).innerHTML = color === 'white' ?
                            this.get(position).innerHTML = svgKnightWhite :
                            this.get(position).innerHTML = svgKnightBlack;
                        break;
                    case 'bishop':
                        this.get(position).innerHTML = color === 'white' ?
                            this.get(position).innerHTML = svgBishopWhite :
                            this.get(position).innerHTML = svgBishopBlack;
                        break;
                    case 'rook':
                        this.get(position).innerHTML = color === 'white' ?
                            this.get(position).innerHTML = svgRookWhite :
                            this.get(position).innerHTML = svgRookBlack;
                        break;
                    case 'queen':
                        this.get(position).innerHTML = color === 'white' ?
                            this.get(position).innerHTML = svgQueenWhite :
                            this.get(position).innerHTML = svgQueenBlack;
                        break;
                    case 'king':
                        this.get(position).innerHTML = color === 'white' ?
                            this.get(position).innerHTML = svgKingWhite :
                            this.get(position).innerHTML = svgKingBlack;
                        break;
                    default:
                    //TODO кинуть ошибку
                }

            }
        }
    }

};