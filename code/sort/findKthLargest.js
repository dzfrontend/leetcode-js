/**
 * 排序扩展
 * leetcode数组中的第K个最大元素
 * 真题链接：https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
 * @param {*} arr, k 
 */

// 方法一: 用sort降序排序
/**
 * export default (arr, k) => {
    return arr.sort((a, b) => b - a)[k - 1]
   }
 */


// 方法二: 利用冒泡排序原理， 优化性能
const findKthLargest = (arr, key) => {
    let len = arr.length - 1
    for (let i = len; i > len - key; i--) { // 原来为i> 0, 利用冒泡排序值越大越后面, 现在只用遍历条件为i> len - key，优化了遍历次数
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr[len - key + 1]
}

export default findKthLargest