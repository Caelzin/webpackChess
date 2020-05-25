import PieceMap from '../../../../server/play/pieceMap';
import Pawn from '../../../../server/play/pieces/pawn';
import Pos from '../../../../server/play/positions'

describe('CanMove function', () => {

    let map, whitePawn, blackPawn;

    beforeEach(() => {
        map = new PieceMap();
        whitePawn = new Pawn('white', Pos.oneDim(0, 4));
        whitePawn.firstStep = 0;
        blackPawn = new Pawn('black', Pos.oneDim(1, 4));
        blackPawn.firstStep = 1;

        map.set(Pos.oneDim(0, 4), whitePawn);
        map.set(Pos.oneDim(1, 4), blackPawn);
    })

    test('simple step', () => {
        expect(whitePawn.canMove(Pos.oneDim(0, 5), map, 2)).toBe(true);
    });

    test('aisle take', () => {
        expect(whitePawn.canMove(Pos.oneDim(1, 5), map, 2)).toBe(true);
    })
});

describe('There is a test for bug that was found', () => {

    let map;

    map = new PieceMap();
    map.fillFromStarterPack();

    test('moving', () => {
        map.delete(0);
        map.delete(8);


        map.get(1).doMove(18, map, 0);
        map.get(48).doMove(32, map, 1);

        map.get(18).doMove(1, map, 2);
        map.get(32).doMove(24, map, 3);

        map.get(1).doMove(18, map, 4);
        map.get(24).doMove(16, map, 5);

        map.get(18).doMove(1, map, 6);
        map.get(16).doMove(8, map, 7);

        map.get(1).doMove(18, map, 8);
        map.get(8).doMove(0, map, 9);

        let test = map.toJSON(9);
        expect(map.has(8)).toBe(true);
    })
});


