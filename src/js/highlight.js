function add(event, grid, jsonGrid) {
    let target = event.target.closest('.cell');

    if (!grid.hasPiece(target, jsonGrid)) {
        return;
    }

    let jsonEntry = grid.hasPiece(target, jsonGrid);

    for (let value of jsonEntry.moves) {
        grid.get(value).style.background = 'cyan';
    }


    target.onmouseout = function () {
        remove(grid);
    }
}

function remove(grid) {
    for (let i of grid.values()) {
        i.style.background = '';
    }
}

export {add, remove}

