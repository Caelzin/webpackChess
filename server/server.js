const http = require('http');
const fs = require('fs');

let PieceMap = require('./pieceMap');


const urlHTML = './dist/index.html';
const urlCSS = './dist/main.css';
const urlJS = './dist/main.js';

let step = 0;
let map = new PieceMap;
map.fillFromStarterPack();
let latestChanges; //TODO

let server = http.createServer((req, res) => {

    if (req.method === 'GET') {
        onGET(req, res);
    } else if (req.method === 'POST') {
        onPOST(req, res, map, step);
    }
});


server.listen(8080, 'localhost', () => console.log("Серв работает"));


function onGET(req, res) {
    switch (req.url) {
        case '/' :
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(fs.readFileSync(urlHTML));
            break;
        case '/main.css' :
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.end(fs.readFileSync(urlCSS));
            break;
        case '/main.js' :
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(fs.readFileSync(urlJS));
            break;
        case '/grid':
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(map.toJSON());
            break;
        case '/latestMove':
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end();
            break;
    }
}

function onPOST(req, res, map, step) {

    function onPostEnd(tempData, map, res) {
        res.writeHead(200);
        if (map.isMoveAvailable(tempData)) {
            map.makeMove(tempData.before, tempData.after, step);
            step++;
        }
        res.end();
    }

    let tempData = '';
    req.on('data', (data) => {
        tempData += data;
    });

    req.on('end', () => onPostEnd(JSON.parse(tempData), map, res))
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end();

}
