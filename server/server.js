const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser()); //обойдусь без опций

const port = 8080;

app.use('/', express.static(__dirname + '/../dist'));
app.use(express.json());


let PieceMap = require('./play/pieceMap');
let map = new PieceMap;
map.fillFromStarterPack();
let player = {white: null, black: null};
let step = {current: 0}; //объект для передачи по ссылке. Есть варик получше?

app.get('/json', (req, res) => {
    if (!req.cookies.userID) {
        let tempID = Math.ceil(Math.random() * 1000);
        res.cookie('userID', tempID);
    }

    if (!player.white || !player.black) {
        if (!player.white) {
            player.white = req.cookies.userID;
        } else {
            if (player.white !== req.cookies.userID) {
                player.black = req.cookies.userID;
            }
        }
    }


    if (req.cookies.userID === player.white) {
        res.send(map.toJSON(step.current, 'white'));
    } else if (req.cookies.userID === player.black) {
        res.send(map.toJSON(step.current, 'black'));
    } else {
        res.send(map.toJSON(step.current, 'spectator'));
    }


})
app.post('/json', (req, res) => {
    let data = req.body;

    if (map.isMoveAvailable(req.body, step.current)) {

        map.makeMove(data.before, data.after, map, step.current, data.targetPiece);

        step.current++;
    }
    res.send(map.toJSON(step.current));
})


app.listen(port, function () {
    console.log('серв работает');
});