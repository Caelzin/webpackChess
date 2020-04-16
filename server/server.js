const http = require('http');
const fs = require('fs');

let PieceMap = require('./pieceMap');

const urlHTML = './dist/index.html';
const urlCSS = './dist/main.css';
const urlJS = './dist/main.js';
let jsonGrid;

let map = new PieceMap;
map.fillFromStarterPack();

let server = http.createServer((req, res) => {

    if (req.method === 'GET') {

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
                res.end(map.JSONify(0));
                break;
        }
    } else if (req.method === 'POST') {
        switch (req.url) {
            case '/post/grid':
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(JSON.stringify(jsonGrid));
        }
    }
    res.end(fs.readFileSync(urlHTML)); //Отправлять текущий json с инфой
});


server.on('request', (req, res) => {

});
server.listen(8080, 'localhost', () => console.log("Серв работает"));
