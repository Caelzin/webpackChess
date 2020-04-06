export default function startMove(event, deck, map, step) {
    let target = event.target.closest('.cell');
    if (!target || target.className !== 'cell' || !map.has(deck.getCellPosition(target))) {
        return;
    }


    let clone = target.cloneNode(true);

    clone.id = 'movable_cell';

    clone.ondragstart = function () {
        return false;
    };

    document.body.append(clone);
    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        clone.style.left = pageX - clone.offsetWidth / 2 + 'px';
        clone.style.top = pageY - clone.offsetHeight / 2 + 'px';
    } //разобраться с функцией в функции

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    document.addEventListener('mouseup', function mouseUp(event) {
        document.removeEventListener('mousemove', onMouseMove);
        target.onmouseup = null;
        parent.addEventListener('mouseover', add);
        let beforePosition = deck.getCellPosition(target);
        document.body.removeChild(event.target.closest('.movable_cell'));
        let after = document.elementFromPoint(event.clientX, event.clientY);
        after = after.closest('.cell');
        let afterPosition = deck.getCellPosition(after);


        if (map.get(beforePosition).canMove(afterPosition, map, step)) { //TODO обработка на серваке
            map.get(beforePosition).doMove(afterPosition, map, step);
            step++;
            deck.draw(map);
        }
        this.removeEventListener('mouseup', mouseUp);
    })
}
