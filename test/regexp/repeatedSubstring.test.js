import repeatedSubstring from '../../code/regexp/repeatedSubstring'

test('repeatedSubstring', () => {
  expect(repeatedSubstring('abab')).toBe(true)
})
test('repeatedSubstring:2', () => {
  expect(repeatedSubstring('abababc')).toBe(false)
})
