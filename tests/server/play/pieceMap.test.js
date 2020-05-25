import PieceMap from '../../../server/play/pieceMap';


let map;
beforeEach(() => {
    map = new PieceMap();
    map.fillFromStarterPack();
})


test('CanMove func calling', () => {
    expect((map.get(8)).canMove(16, map, 0)).toBe(true);
    expect((map.get(8)).canMove(17, map, 0)).toBe(false);
});

test('DoMove func calling', () => {
    let pawn = map.get(8);
    pawn.doMove(16, map, 0);
    expect(map.has(16)).toBe(true);
});


test('isMoveAvailable', () => {
    expect(map.isMoveAvailable({before: 8, after: 16}, 0)).toBe(true);
});
