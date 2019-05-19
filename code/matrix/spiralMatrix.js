/**
 * 螺旋矩阵
 * 原理：观察螺旋矩阵的规律可以知道：
 *      1.把最外层一圈看作一次遍历；
 *      2.先遍历二维矩阵的第一行元素，然后遍历第二行.第三行...直到最后第n-1行的最后一个元素，
 *      然后遍历最后第n行的元素进行反转，最后遍历第n-1行到第二行的第一个元素；这就是一次完整的遍历
 *      3.里面的矩阵再递归(重复)上面步骤
 * https://leetcode-cn.com/problems/spiral-matrix/
 */

// arr是二维数组
const sprialMatrix = (arr) => {
    // 处理每一圈的数据遍历
    function map(arr, temp = []) {
        for (let i = 0, len = arr.length; i < len; i++) {
            if (i === 0) { // 第一行
                temp = temp.concat(arr[i]) // 拷贝第一行所有元素
            } else if (i === len - 1) {
                temp = temp.concat(arr[i].reverse()) // 拷贝最后一行元素反转顺序
            } else {
                temp.push(arr[i].pop()) // 第二到第n-1行最后一个元素，并且pop会把最后一个元素从arr中扔掉
            }
        }
        // 扔掉第一行
        arr.shift()
        // 扔掉最后一行
        arr.pop()
        // 从下到上顺序(第n-1行到第二行)取第一个元素，并从arr中扔掉(shift会扔掉)
        for (let i = arr.length - 1; i >= 0; i--) {
            temp.push(arr[i].shift())
        }
        // 判断是否还有元素，有递归下一圈的数据遍历
        if (arr.length) {
            return map(arr, temp)
        } else {
            return temp
        }
    }
    return map(arr, []) // 初始化执行map
}

export default sprialMatrix