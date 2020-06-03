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


