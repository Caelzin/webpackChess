import {getter, poster} from "@src/js/fetcher";
import SvgHelper from "@src/js/svgHelper";

export default class dataHelper {

    static sendData(piece, after, grid) {
        for (let j of piece.moves) {
            if (j === after) {
                let data = {
                    before: piece.position,
                    after: after,
                }

                if (piece.type === 'pawn' && (after >= 55 || after < 8)) {
                    this.chooseTarget(piece.color, data);
                    break;
                } else {
                    poster(data);
                    getter(grid);
                    break;
                }
            }
        }
    }

    static createPopup(color) {
        this.createPopupElement('popup-back');
        let popup = this.createPopupElement('popup-body');

        this.createPopupPieces(popup, color);
    }

    static chooseTarget(color, data) {
        this.createPopup(color);

        document.addEventListener('mouseup', function mouseUp(event) {
            let after = document.elementFromPoint(event.clientX, event.clientY);
            after = after.closest('.targetPiece');
            if (!after || after.className !== 'targetPiece') {
                return;
            }

            data.targetPiece = after.id;

            closePopup();

            poster(data);

            function closePopup() {
                let popup = document.querySelector('.popup-back');
                popup.remove();
                popup = document.querySelector('.popup-body');
                popup.remove();
            }
        });

    }

    static createPopupElement(className) {
        let newElement = document.createElement('div');
        newElement.className = className;
        document.body.append(newElement);
        return newElement;
    }

    static createPopupPieces(parent, color) {
        let pieces = ['bishop', 'knight', 'queen', 'rook'];
        for (let type of pieces) {
            let piece = document.createElement('div');
            piece.id = type;
            piece.className = 'targetPiece';

            piece.innerHTML = SvgHelper.piecePicker(type, color);

            parent.append(piece);
        }
    }
}