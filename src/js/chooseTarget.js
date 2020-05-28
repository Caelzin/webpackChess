import SvgHelper from "@src/js/svgHelper";
import {poster} from '@src/js/fetcher';


export default function chooseTarget(color, data) {

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

    document.addEventListener('mouseup', function mouseUp(event) {
        let after = document.elementFromPoint(event.clientX, event.clientY);
        after = after.closest('.targetPiece');
        if (!after || after.className !== 'targetPiece') {
            return;
        }
        console.log(data);
        closePopup(popupBody, popupBack, data, after.id).then(poster(data));
    });


}

async function closePopup(popupBody, popupBack, data, choose) {
    popupBody.remove();
    popupBack.remove();

    data.targetPiece = choose;
    return data;
}
