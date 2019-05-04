import findKthLargest from '../../code/sort/findKthLargest'

test('数组中的第K个最大元素:input 2', () => {
  expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5)
})
test('数组中的第K个最大元素:input 4', () => {
  expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4)
})
