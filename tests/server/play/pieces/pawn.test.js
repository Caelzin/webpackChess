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

    let moves = [
        {from: 8, to: 24},
        {from: 49, to: 33},
        {from: 24, to: 33},
        {from: 57, to: 42},
        {from: 33, to: 41},
        {from: 42, to: 57},
        {from: 41, to: 49},
        {from: 57, to: 42},
    ];
    let step = 0;


    test('moving', () => {
        for (let i of moves) {
            map.get(i.from).doMove(i.to, map, step++)
        }
        map.get(49).doMove(57, map, step++, 'knight');

        let test = map.toJSON(9);
        expect(map.get(57).type).toBe('knight');
    })
});


