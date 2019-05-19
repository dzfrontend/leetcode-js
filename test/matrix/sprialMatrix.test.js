import sprialMatrix from '../../code/matrix/spiralMatrix'

test('matrix', () => {
    let arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
    expect(sprialMatrix(arr)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5])
})