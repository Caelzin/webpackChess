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

    static createPopup (color) {
        let popupBody = document.createElement('div');
        popupBody.className = 'popup-body';
        document.body.append(popupBody);

        let popupBack = document.createElement('div');
        popupBack.className = 'popup';
        document.body.append(popupBack);

        let pieces = ['bishop', 'knight', 'queen', 'rook'];
        for (let type of pieces) {
            let piece = document.createElement('div');
            piece.id = type;
            piece.className = 'targetPiece';

            piece.innerHTML = SvgHelper.piecePicker(type, color);

            popupBody.append(piece);
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

            closePopup();
            data.targetPiece = after.id;

            poster(data);

            function closePopup() { //TODO как-то вынести можно? как тогда передать?
                for (let child of document.body.children) {
                    if (child.className === 'popup-body' || child.className === 'popup') {
                        child.remove();
                    }
                }
            }
        });

    }
}