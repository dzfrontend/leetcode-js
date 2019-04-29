/**
 * 数组之格雷编码
 * 格雷编码
 * 真题链接：https://leetcode-cn.com/problems/gray-code/
 * */

// 思路：找规律
export default (n) => {
    // 递归函数，用来算输入为n的格雷编码序列
    let make = (n) => {
        if (n === 1) {
            return ['0', '1']
        } else {
            let prev = make(n - 1) // 需要用到前一个计算结果
            let result = []
            let max = Math.pow(2, n) - 1 // 幂运算
            for (let i = 0, len = prev.length; i < len; i++) {
                result[i] = `0${prev[i]}`
                result[max - i] = `1${prev[i]}`
            }
            return result
        }
    }
    return make(n)
}
