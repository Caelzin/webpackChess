import * as highlight from '@src/js/highlight';
import movePiece from "@src/js/movePiece";

export {getter, poster};

async function getter(grid) {
    let response = await fetch('/json', {
        method: 'GET'
    });
    let jsonGrid = await response.json()
    grid.draw(jsonGrid);
    parent.onmouseover = (event) => highlight.add(event, grid, jsonGrid);
    parent.onmousedown = (event) => movePiece(event, grid, jsonGrid);
    return jsonGrid;
}

function poster(data) {
    fetch('/json',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
}