import sortArrayByParity from '../../code/sort/sortArrayByParity'

test('奇偶排序', () => {
  expect(sortArrayByParity([4, 2, 5, 7, 1, 6])).toEqual([2, 1, 4, 5, 6, 7])
})
