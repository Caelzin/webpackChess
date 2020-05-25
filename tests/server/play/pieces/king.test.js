import PieceMap from '../../../../server/play/pieceMap';
import Pos from '../../../../server/play/positions';

let map, king;

beforeEach(() => {
    map = new PieceMap;
    map.fillFromStarterPack();
    for (let i = 1; i < 4; i++) {
        map.delete(i);
    }
    map.delete(5);
    map.delete(6);

    king = map.get(4);
});

describe('CanMove function', () => {

    test('Type is "king"', () => {
        expect(king.type).toBe('king');
    });

    test('Can move one cell left', ()=> {
        expect(king.canMove(3, map, 0)).toBe(true);
    });
    test('Can move one cell right', ()=> {
        expect(king.canMove(5, map, 0)).toBe(true);
    });

    test('Can castle to left side', ()=> {
        expect(king.canMove(2, map, 0)).toBe(true);
    });
    test('Can castle to right side', ()=> {
        expect(king.canMove(6, map, 0)).toBe(true);
    })
});

describe('Moved one cell left', () => {

    beforeEach(() => {
        king.doMove(Pos.oneDim(3, 0), map, 0);
    })

    test('There is a piece in cell [3; 0]', ()=> {
        expect(map.has(3)).toBe(true);
    });
    test('There is no piece in cell [4; 0]', ()=> {
        expect(map.has(4)).toBe(false);
    });

});

describe('left castling', () => {

    beforeEach(() => {
        king.doMove(Pos.oneDim(2, 0), map, 0);
    })

    test('There is a piece in cell [2; 0]', ()=> {
        expect(map.has(3)).toBe(true);
    });
    test('There is a rook in cell [2; 0]', ()=> {
        expect(map.get(3).type).toBe('rook');
    });

    test('There is a piece in cell [2; 0]', ()=> {
        expect(map.has(2)).toBe(true);
    });
    test('There is a king in cell [2; 0]', ()=> {
        expect(map.get(2).type).toBe('king');
    });
    test('There is no piece in cell [4; 0]', ()=> {
        expect(map.has(4)).toBe(false);
    });

});