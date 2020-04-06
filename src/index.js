import './style/style.css'

import PieceMap from "./js/pieceMap";
import Grid from "./js/grid";
import * as highlight from './js/highlight';
import startMove from "./js/startMove";

const gridSize = 8;
let step = 0;
let parent = document.getElementById('deck-surface');
let map = new PieceMap();
map.fill();
let deck = new Grid(parent, gridSize);
deck.draw(map);
parent.addEventListener('mouseover', highlight.add);
parent.addEventListener('mousedown', () => {startMove(event, deck, map, step)});