module.exports = class EndGameChecker {

    static ifMate (json, color) {
        return !this.canMove(JSON.parse(json), color) && this.isKingUnderAttack(JSON.parse(json), color);
    }

    static ifPat (json, color) {
        return !this.canMove(JSON.parse(json), color) && !this.isKingUnderAttack(JSON.parse(json), color);
    }
    //демо-версия. Пропущены многие условия, в т.ч. недостаток фигур для выигрыша или правило трех повторений


    static canMove (json, color) {
        let canMove = false;
        for (let piece of json) {
            if (piece.color === color && piece.moves.length !== 0) {
                canMove = true;
                break;
            }
        }
        return canMove;
    }
    static getKingPosition(json, color) {
        for (let piece of json) {
            if (piece.color === color && piece.type === 'king') {
                return piece.position;
            }
        }
    }

    static isKingUnderAttack (json, color) {
        let underAttack = false;
        let kingPosition = this.getKingPosition(json, color);
        console.log(kingPosition + ' kingPos')
        let enemyColor = color === 'white' ? 'black' : 'white';
        for (let piece of json) {
            if (underAttack) {
                break;
            }
            if (piece.color === enemyColor) {
                for (let move of piece.moves) {
                    if (move === kingPosition) {
                        underAttack = true;
                        break;
                    }
                }
            }
        }
        return underAttack;
    }
}