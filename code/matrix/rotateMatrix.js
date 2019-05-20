/**
 * 旋转矩阵
 * 原理：找中心轴进行元素交换，首先以水平中心轴进行元素交换，然后以对角线中心轴进行元素交换
 * https://leetcode-cn.com/problems/rotate-image/
 */

const rotateMatrix = (arr) => {
    // n × n 的二维矩阵获取n
    let vecor = arr.length

    // 以水平中心轴进行元素交换
    // 遍历二维矩阵列进行水平翻转，只用遍历一维的一半(遍历水平中心轴前面的)
    for (let i = 0, len = vecor / 2; i < len; i++) {
        // 遍历二维
        for (let j = 0, temp; j < vecor; j++) {
            temp = arr[i][j]
            arr[i][j] = arr[vecor-1-i][j]
            arr[vecor - 1 - i][j] = temp
        }
    }

    // 以对角线中心轴进行元素交换
    for (let i = 0; i< vecor; i++) { // 遍历行
        for(let j = 0, temp; j < i; j ++) { // 遍历列
            temp = arr[i][j] // 取对角线下面的元素
            arr[i][j] = arr[j][i] // 角标交换就是对角线上面的元素
            arr[j][i] = temp
        }
    }
    return arr
}
export default rotateMatrix