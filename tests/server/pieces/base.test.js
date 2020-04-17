import Base from '@src/../../server/pieces/base';



describe('Base class: checking information', () => {

    let base = new Base('white', 0);
    test('White color inserted', () => {
        expect(base.color).toEqual('white');
    });
});


test('Grey color inserted', () => {
    expect(() => {new Base('grey', 0)}).toThrowError();
});


