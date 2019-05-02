/**
 * 排序之冒泡排序
 * 原理：比较相邻元素，将较大值依次向后排，这样遍历后最后面的就是最大值，遍历光标从后向前移动一位，继续遍历上述过程
 *      对数组进行遍历，遍历过程按照遍历顺序比较后一个元素，比后一个元素大则交换位置，这样一次遍历就可以把从第一个到最后一个元素的最大值放到数组最后；
 *      依此内推，接着继续遍历，每次遍历数组遍历光标从后向前移动一位(数组遍历length减1)，直到遍历光标为0
 * @param {*} arr 
 */

const bubbleSort = (arr) => {
    for (var i = arr.length - 1; i > 0; i--) { // 每次遍历数组遍历光标从后向前移动一位
        for (var j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}
export default bubbleSort