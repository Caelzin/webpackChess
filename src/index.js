import '@src/style/style.css'

import Grid from '@src/js/grid';
import * as highlight from '@src/js/highlight';
import movePiece from '@src/js/movePiece';

let grid = new Grid(document.getElementById('deck-surface'));
let jsonGrid;


getter().then(() => {
    parent.onmouseover = (event) => highlight.add(event, grid, jsonGrid)
    parent.addEventListener('mousedown', (event) => movePiece(event, grid, jsonGrid))
})


async function getter() {
    let response = await fetch('http://localhost:8080/grid', {
        method: 'GET'
    });
    jsonGrid = await response.json();
    grid.draw(jsonGrid);
}