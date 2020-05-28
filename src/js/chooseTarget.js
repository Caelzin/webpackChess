import svgRookBlack from './../assets/svg/pieces/rook_black.svg'
import svgRookWhite from './../assets/svg/pieces/rook_white.svg'
import svgBishopBlack from './../assets/svg/pieces/bishop_black.svg'
import svgBishopWhite from './../assets/svg/pieces/bishop_white.svg'
import svgQueenBlack from './../assets/svg/pieces/queen_black.svg'
import svgQueenWhite from './../assets/svg/pieces/queen_white.svg'
import svgKnightBlack from './../assets/svg/pieces/knight_black.svg'
import svgKnightWhite from './../assets/svg/pieces/knight_white.svg'
import {getter, poster} from '@src/js/fetcher';


export default function chooseTarget(color, data) {

    let popupBody = document.createElement('div');
    popupBody.className = 'popup-body';
    document.body.append(popupBody);

    let popupBack = document.createElement('div');
    popupBack.className = 'popup';
    document.body.append(popupBack);

    let pieces = [
        {name: 'bishop', white: svgBishopWhite, black: svgBishopBlack},
        {name:'knight', white: svgKnightWhite, black: svgKnightBlack},
        {name:'queen', white: svgQueenWhite, black: svgQueenBlack},
        {name:'rook', white: svgRookWhite, black: svgRookBlack}
    ]
    for (let i of pieces) {
        let piece = document.createElement('div');
        piece.id = i.name;
        piece.className = 'targetPiece';

        piece.innerHTML = color === 'white'? i.white : i.black;

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
