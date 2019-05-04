import firstMissingPositive from '../../code/sort/firstMissingPositive'

test('缺失的第一个正数:1', () => {
  expect(firstMissingPositive([1, 2, 0])).toBe(3)
})

test('缺失的第一个正数:2', () => {
  expect(firstMissingPositive([3, 4, -1, 1])).toBe(2)
})

test('缺失的第一个正数:3', () => {
  expect(firstMissingPositive([7, 8, 9, 11, 12])).toBe(1)
})

test('缺失的第一个正数:4', () => {
  expect(firstMissingPositive([1, 2, 3, 4, 5, 6])).toBe(7)
})
