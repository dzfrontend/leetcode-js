/**
 * 排序扩展
 * leetcode按奇偶排序数组
 * 真题链接：https://leetcode-cn.com/problems/sort-array-by-parity-ii/
 * @param {*} arr 
 */

// 奇偶排序就是先对数组进行排序，然后遍历数组，奇数放在奇数项，偶数放在偶数项
const sortArrayByParity = (arr) => {
    // 先直接用sort对数组排序
    arr.sort((a, b) => a - b)
    // 临时数组保存结果
    let tempArr = []
    // 记录奇数、偶数位下标
    let evenIndex = 0
    let oddIndex = 1
    arr.forEach(item => {
        if (item % 2 === 0) {
            tempArr[evenIndex] = item
            evenIndex += 2
        } else {
            tempArr[oddIndex] = item
            oddIndex += 2
        }
    })
    return tempArr
}
export default sortArrayByParity