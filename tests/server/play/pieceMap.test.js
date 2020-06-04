import PieceMap from '../../../server/play/pieceMap';


let map;

describe('Methods with starterPack', () => {
    describe('StarterPack tests', () => {
        beforeAll(() => {
            map = new PieceMap();
            map.fillFromStarterPack();
        });

        //можно заменить на массив имя-проверка-ожидается
        test('map has piece at position 8', () => {
            expect(map.has(8)).toBe(true);
        });
        test('map at position 4 is king', () => {
            expect(map.get(4).type).toBe('king');
        });
        test('map at position 54 has piece with position 54', () => {
            expect(map.get(54).position).toBe(54);
        });
        test('map at position 49 has piece with black color', () => {
            expect(map.get(49).color).toBe('black');
        });
        test('map at position 18 has no piece', () => {
            expect(map.has(18)).toBe(false);
        });
    });

    describe('Color selection', () => {
        let white, purple;
        beforeAll(() => {
            map = new PieceMap();
            map.fillFromStarterPack();
            white = map.friendly('white');
            purple = map.friendly('purple');
        });

        test('friendly("white") has white', () => {
            expect(white.has(8)).toBe(true);
        });
        test('friendly("white") has no black', () => {
            expect(white.has(63)).toBe(false);
        });

        test('friendly("purple") returns nothing', () => {
            expect(purple).toBe(undefined);
        });
    });


    describe('Find king position', () => {
        test('Function returns 4 for white pieces', () => {
            expect(map.findKingPosition('white')).toBe(4);
        });
        test('Function returns 60 for black pieces', () => {
            expect(map.findKingPosition('black')).toBe(60);
        });
    });
});


test('CanMove func', () => {
    expect((map.get(8)).canMove(16, map, 0)).toBe(true);
    expect((map.get(8)).canMove(17, map, 0)).toBe(false);
});

test('DoMove func', () => {
    let pawn = map.get(8);
    pawn.doMove(16, map, 0);
    expect(map.has(16)).toBe(true);
});


test('isMoveAvailable', () => {
    expect(map.isMoveAvailable({before: 8, after: 16}, 0)).toBe(true);
});
