/**
 * 数组之分组
 * 卡牌分组
 * 真题链接：https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/
 * */

// 实现数组分组的方法：输入cardGroup([1,2,3,4,4,3,2,1]) 输出为[1,1]，[2,2]，[3,3]，[4,4]
const cardGroup = (arr) => {
    // 先进行排序，升序、降序都可以
    arr.sort((a, b) => a - b)
    let dist = []
    // 数组相同元素分组的原理，也就是先对数组进行排序，然后遍历数组，将数组的前一个元素和后面的元素进行比较，将相等元素push到一个临时数组
    // 直到元素不相等，返回临时数组，并且将光标移动至不相等处，跳出该循环继续循环
    for (let i = 0; i < arr.length; i++) {
        let temp = [] // 临时数组用于保存相同元素
        temp.push(arr[i])
        for (let j = i + 1; j <= arr.length; j++) { // 将前一个元素和后面元素进行比较)
            if (arr[i] === arr[j]) {
                temp.push(arr[j])
            } else {
                dist.push([].concat(temp))
                temp.length = 0 // 清空临时数组
                i = j - 1 // 将光标位置移动至不相等处
                break // 跳出当前循环
            }
        }
    }
    return dist
}

// 加上true的判断
const cardGroup2 = (arr) => {
    arr.sort((a, b) => a - b)
    let dist = []
    let min = Number.MAX_SAFE_INTEGER
    let result = true
    for (let i = 0; i < arr.length; i++) {
        let temp = []
        temp.push(arr[i])
        for (let j = i + 1; j <= arr.length; j++) {
            if (arr[i] === arr[j]) {
                temp.push(arr[j])
            } else {
                if (min > temp.length) {
                    min = temp.length
                }
                dist.push([].concat(temp))
                temp.length = 0
                i = j - 1
                break
            }
        }
    }
    dist.every(item => {
        if ((item.length % min) !== 0) {
            result = false
            return false
        }
    })
    return result
}

export default cardGroup2