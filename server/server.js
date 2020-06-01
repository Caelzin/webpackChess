const express = require('express');
const endGameChecker = require('./play/endGameChecker');
const PieceMap = require('./play/pieceMap');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
const port = 8080;

app.use('/', express.static(__dirname + '/../dist'));
app.use(express.json());

const map = new PieceMap;
map.fillFromStarterPack();
const player = {white: null, black: null};
const step = {current: 0};
const game = {ended: false};

app.get('/json', (req, res) => {
    if (!req.cookies.userID) {
        let tempID = Math.ceil(Math.random() * 1000);
        res.cookie('userID', tempID);
    }

    fillPlayers(player, req);

    if (game.ended === true) {
        res.send('Game ended');
    } else {
        if (req.cookies.userID === player.white) {
            res.send(map.toJSON(step.current, 'white'));
        } else if (req.cookies.userID === player.black) {
            res.send(map.toJSON(step.current, 'black'));
        } else {
            res.send(map.toJSON(step.current, 'spectator'));
        }
    }


})
app.post('/json', (req, res) => {
    let data = req.body;

    if (map.isMoveAvailable(req.body, step.current)) {
        map.makeMove(data.before, data.after, map, step.current, data.targetPiece);
        step.current++;
    }

    let json = map.toJSON(step.current);
    let color = req.cookies.userID === player.white ? 'white' : 'black';

    if (endGameChecker.ifMate(json, color) || endGameChecker.ifPat(json, color)) {
        game.ended = true;

        if (game.ended === false) {
            res.send(json)
        }
    }

})


app.listen(port, function () {
    console.log('серв работает');
});

function fillPlayers(player, req) {
    if (!player.white || !player.black) {
        if (!player.white) {
            player.white = req.cookies.userID;
        } else {
            if (player.white !== req.cookies.userID) {
                player.black = req.cookies.userID;
            }
        }
    }
}