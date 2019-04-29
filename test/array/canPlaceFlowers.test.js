import canPlaceFlowers from '../../code/array/canPlaceFlowers'

test('flower:[1,0,0,0,1],1', () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true)
})
test('flower:[1,0,0,0,1],2', () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false)
})
