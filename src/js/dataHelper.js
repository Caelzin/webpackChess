import {getter, poster} from "@src/js/fetcher";
import SvgHelper from "@src/js/svgHelper";

export default class dataHelper {

    static sendData(piece, after) {
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
                    break;
                }
            }
        }
    }


    static createPopup(color) {
        this.createPopupElement('popup-back');
        let popup = this.createPopupElement('popup-body');

        let pieces = ['bishop', 'knight', 'queen', 'rook'];
        for (let type of pieces) {
            let piece = document.createElement('div');
            piece.id = type;
            piece.className = 'targetPiece';

            piece.innerHTML = SvgHelper.piecePicker(type, color);

            popup.append(piece);
        }
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

            function closePopup() { //TODO как-то вынести можно? как тогда передать?
                for (let child of document.body.childNodes) {
                    if (child.className === 'popup-back' || child.className === 'popup-body') { //TODO не имею ни малейшего представления, почему вторая в очереди штука не работает
                        child.remove();
                    }
                }
            }
        });

    }

    static createPopupElement(className) {
        let newElement = document.createElement('div');
        newElement.className = className;
        document.body.append(newElement);
        return newElement;
    }
}