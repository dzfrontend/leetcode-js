/**
 * 栈：栈是单向的，有入栈和出栈操作，js中可以用数组来模拟栈
 * leetcode棒球比赛
 * 真题链接：https://leetcode-cn.com/problems/baseball-game/
 */

// 看了棒球比赛的真题链接后，栈最适合解决

const calPoints = (arr) => {
    // 用数组的push，pop方法来实现堆栈结构，数组就可以模拟栈
    let tempStack = [] // 栈
    let prev1 // 上一轮得分
    let prev2 // 上上轮得分
    arr.forEach(item => {
        switch (item) {
            case 'C':
                if (tempStack.length) {
                    tempStack.pop() // 出栈
                }
                break
            case 'D':
                prev1 = tempStack.pop() // 出栈
                tempStack.push(prev1, prev1 * 2) // 入栈
                break
            case '+':
                prev1 = tempStack.pop()
                prev2 = tempStack.pop()
                tempStack.push(prev2, prev1, prev1 + prev2)
                break
            default:
                tempStack.push(item * 1)
        }
    })
    // 对栈里面每一轮得分进行reduce求和
    return tempStack.reduce((total, num) => { return total + num })
}

export default calPoints