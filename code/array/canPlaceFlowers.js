/**
 * 数组之种花
 * 种花问题
 * 真题链接：https://leetcode-cn.com/problems/can-place-flowers/
 * */

// 思路是数组arr中的元素为0可以种花，1不能种花，但是要考虑边界问题，
// 数组arr中相邻的前面一个元素和后面一个元素为0才可以在这个位置种花，数组第一个元素是需要特殊判断边界的地方
const canPlaceFlowers = (arr, n) => {
    let maxN = 0
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] === 0) { // 0可以种花
            // 判断数组第一个元素的位置
            if (i === 0 && arr[1] === 0) {
                maxN++
                i++
            } else if (arr[i - 1] === 0 && arr[i + 1] === 0) {
                maxN++
                i++
            }
        }
    }
    return maxN >= n
}

export default canPlaceFlowers