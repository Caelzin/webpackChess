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
let users = [];
let step = {current: 0}; //объект для передачи по ссылке. Есть варик получше?

app.get('/json', (req, res) => {
    res.send(map.toJSON(step.current));
})
app.post('/json', (req, res) => {
    let data  = req.body;

    if (!req.cookies.userID) {
        let tempID = Math.ceil(Math.random() * 1000);
        res.cookie('userID', tempID);
        users.push(tempID); //todo не работает

    }

    if (map.isMoveAvailable(req.body, step.current)) {
        map.makeMove(data.before, data.after, map, step.current, data.targetType);
        step.current++;
        if(map.has(16))
            console.log(map.get(16).firstStep);
        console.log(step.current);

    }
    res.send(map.toJSON(step.current));
})


app.listen(port, function () {
    console.log('серв работает');
});