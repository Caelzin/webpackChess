import svgPawnBlack from '@src/assets/svg/pieces/pawn.svg'
import svgRookBlack from '@src/assets/svg/pieces/rook.svg'
import svgBishopBlack from '@src/assets/svg/pieces/bishop.svg'
import svgQueenBlack from '@src/assets/svg/pieces/queen.svg'
import svgKingBlack from '@src/assets/svg/pieces/king.svg'
import svgKnightBlack from '@src/assets/svg/pieces/knight.svg'


export default class SvgHelper {

    static piecePicker(type, color) {
        let svgString;
        switch (type) {
            case 'pawn':
                svgString = svgPawnBlack;
                break;
            case 'knight':
                svgString = svgKnightBlack;
                break;
            case 'bishop':
                svgString = svgBishopBlack;
                break;
            case 'rook':
                svgString = svgRookBlack;
                break;
            case 'queen':
                svgString = svgQueenBlack;
                break;
            case 'king':
                svgString = svgKingBlack;
                break;
        }
        return this.colorPicker(svgString, color);
    }

    static colorPicker(svgString, color) {
        if (color === 'white') {
            svgString = svgString.replace('black', 'white');
        }
        return svgString;
    }
}
