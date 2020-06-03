import '@src/style/play.css'

import Grid from '@src/js/grid';
import {getter, askRestart} from '@src/js/fetcher';

let grid = new Grid(document.getElementById('deck-surface'));
let jsonGrid;


getter(grid)
    .then((newGrid) => jsonGrid = newGrid);

setInterval(getter, 1000, grid);

document.getElementById('restart-button').onclick = () => askRestart();