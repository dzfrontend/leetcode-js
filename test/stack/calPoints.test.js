import calPoints from '../../code/stack/calPoints'

test('栈-棒球比赛1', () => {
    expect(calPoints(["5", "2", "C", "D", "+"])).toBe(30)
})

test('栈-棒球比赛2', () => {
    expect(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"])).toBe(27)
})