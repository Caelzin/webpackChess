
createPieceSwitchPopup('').then(() => {alert('Я должен вылезти после клика!')});


async function createPieceSwitchPopup(color) {
    let popup = document.createElement('div'); //TODO в функцию надо?
    popup.className = 'popup';

    let popupBody = document.createElement('div');
    popupBody.className = 'popup-body';

    popup.append(popupBody);

    document.body.append(popup);

    let pieceTypeNumber = 4;
    for (let i = 0; i < pieceTypeNumber; i++) {

    }

    popupBody.innerHTML = //color, когда ожидание заработает
        '<img src="assets/svg/rook.svg" id = popup-rook class = svg-piece>' +
        '<img src="assets/svg/bishop.svg" id = popup-bishop class = svg-piece>' +
        '<img src="assets/svg/knight.svg" id = popup-knight class = svg-piece>' +
        '<img src="assets/svg/queen.svg" id = popup-queen class = svg-piece>';
    popupBody.onclick = function (event) {
        let target = event.target.closest('.svg-piece');
        switch (target.id) {
            case 'popup-rook': {
                return 'rook';
            }
            case 'popup-bishop': {
                return 'bishop';
            }
            case 'popup-knight': {
                return 'knight';
            }
            case 'popup-queen': {
                return 'queen';
            }
            default: {
                return;
            }
        }

    };

}

