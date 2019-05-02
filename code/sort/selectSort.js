/**
 * 排序之选择排序
 * 原理：比较起始元素和后面每一个元素，将它们中最小元素替换起始元素，这样遍历后前面元素最小，起始元素光标加1，继续遍历上述过程
 * @param {*} arr 
 */

const selectSort = (arr) => {
    for (var i = 0; i < arr.length; i++) {
        var minInit = arr[i]
        for (var j = i; j < arr.length; j++) {
            if (minInit > arr[j]) {
                var temp = minInit
                minInit = arr[j]
                arr[j] = temp
            }
        }
        arr[i] = minInit // 最后将一次完整遍历的最小值赋值给起始元素
    }
    return arr
}

export default selectSort