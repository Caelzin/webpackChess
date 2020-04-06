function add(event) {
    let target = event.target.closest('.cell');
    if (!target || target.className !== 'cell') {
        return;
    }

    let cellID = deck.getCellPosition(target);

    if (map.has(cellID)) {
        let links = map.get(cellID).moveAbility(map, deck, step);
        for (let value of links) {
            value.style.background = 'cyan';
        }
    }

    target.onmouseout = function () {
        remove();
    }
}

function remove() {
    let cells = document.getElementsByClassName('cell'); //TODO document -> parent

    for (let i = 0; i < cells.length; i++) {
        cells[i].style.background = '';
    }
}

export {add, remove}

