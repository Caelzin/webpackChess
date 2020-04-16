const highlight = require('./highlight');

module.exports = function movePiece(event, grid, jsonGrid) {
    let target = event.target.closest('.cell');

    if (!grid.hasPiece(target, jsonGrid)) {
        return;
    }
    removeEventListener('mouseover', (event) => highlight.add(event, grid, jsonGrid));

    let clone = target.cloneNode(true);
    clone.id = 'movable_cell';
    clone.ondragstart = function () {
        return false;
    };


    document.body.append(clone);
    moveAt(event.pageX, event.pageY);

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', function mouseUp(event) {
        document.removeEventListener('mousemove', onMouseMove);
        target.onmouseup = null;
        parent.addEventListener('mouseover', (event) => highlight.add(event, grid, jsonGrid));
        document.body.removeChild(event.target.closest('#movable_cell'));
        let after = document.elementFromPoint(event.clientX, event.clientY);
        after = after.closest('.cell');
        let afterPosition = grid.getCellPosition(after);


        let before = grid.hasPiece(target,  jsonGrid);
        for (let j of before.moves) {
            if (j === afterPosition) {

                let data = {
                    before: before.position,
                    after: afterPosition
                }
                fetch('/post/move',
                    {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(data)
                    })
                    .then(res => {
                        jsonGrid = res;
                        console.log(jsonGrid.json());
                    });
                break;
            }
        }

        this.removeEventListener('mouseup', mouseUp);
    })




    function moveAt(pageX, pageY) {
        clone.style.left = pageX - clone.offsetWidth / 2 + 'px';
        clone.style.top = pageY - clone.offsetHeight / 2 + 'px';
    } //разобраться с функцией в функции

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }
}