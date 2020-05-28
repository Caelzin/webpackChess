import * as highlight from './highlight';
import DataHelper from "@src/js/dataHelper";
import {getter, poster} from '@src/js/fetcher';

export default function movePiece(event, grid, jsonGrid) {
    let target = event.target.closest('.cell');

    if (!grid.hasPiece(target, jsonGrid)) {
        return;
    }
    let clone = target.cloneNode(true);
    clone.id = 'movable-cell';
    clone.classList = ''
    clone.ondragstart = function () {
        return false;
    };


    document.body.append(clone);
    moveAt(event.pageX, event.pageY);

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', function mouseUp(event) {
        document.removeEventListener('mousemove', onMouseMove);
        target.onmouseup = null;
        parent.onmouseover = (event) => highlight.add(event, grid, jsonGrid)
        document.body.removeChild(clone);
        let after = document.elementFromPoint(event.clientX, event.clientY);
        after = after.closest('.cell');
        let afterPosition = grid.getCellPosition(after);

        let before = grid.hasPiece(target, jsonGrid);

        DataHelper.sendData(before, afterPosition);

        this.removeEventListener('mouseup', mouseUp);
    })


    function moveAt(pageX, pageY) {
        clone.style.left = pageX - clone.offsetWidth / 2 + 'px';
        clone.style.top = pageY - clone.offsetHeight / 2 + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }
}