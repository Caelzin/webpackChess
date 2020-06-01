import SvgHelper from "@src/js/svgHelper";

export default class Grid extends Map {
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
            if (entry[1] === link) {
                return entry[0];
            }
        }
        return null;
    }

    fill() {
        let columns = this._parent.childNodes;

        for (let i = 0; i < this._size; i++) {
            let line = columns[i + 1].childNodes;
            for (let j = 0; j < this._size; j++) {
                this.set((this._size - j - 1) * this._size + i, line[j + 1]);
                //Сложная формула просто переворачивает по вертикали отсчет
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
            this.get(piece.position).innerHTML = SvgHelper.piecePicker(piece.type, piece.color);
        }
    }

    hasPiece(targetCell, jsonGrid) {
        if (!targetCell || targetCell.className !== 'cell') {
            return false;
        }
        for (let i of jsonGrid) {
            if (i.position === this.getCellPosition(targetCell)) {
                return i;
            }
        }
        return false;
    }
};