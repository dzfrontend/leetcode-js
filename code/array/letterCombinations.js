/**
 * 数组之公式运算
 * 电话号码的字母组合
 * 真题链接：https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 * */
const letterCombinations = (str) => {
    // 建立电话号码键盘映射
    let words = ['1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    // 把输入字符串按单字符分隔变成数组，12 => [1,2]
    let telNums = str.split('')
    // 保存键盘映射后的字母内容，如 23 => ['abc','def']
    let codeArr = []
    telNums.map(item => {
        if (words[item-1]) {
            codeArr.push(words[item-1])
        }
    })
    // 先把数组最前面两个元素两两组合，组合后再和其他的组合
    let combinationsTwoCode = (arr) => {
        if (arr.length < 2) return arr
        let combCode = []
        for (let i = 0; i < arr[0].length; i++) {
            for (let j = 0; j < arr[1].length; j++) {
                combCode.push(`${arr[0][i]}${arr[1][j]}`)
            }
        }
        // 把数组前两个元素组合的结果替换掉这两个元素，如果length大于2，说明还有其他元素，继续比较(递归)，否则返回比较结果
        arr.splice(0, 2, combCode)
        if (arr.length >= 2) {
            return combinationsTwoCode(arr)
        } else {
            return combCode
        }
    }
    return combinationsTwoCode(codeArr)
}
export default letterCombinations