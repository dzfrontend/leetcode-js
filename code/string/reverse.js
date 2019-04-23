/**
 * 反转字符串中的单词
 * 真题链接：https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/
 * */

/* // 方法一：用String.prototype.split
export default (str) => {
    // 1. 字符串按空格进行分隔，保存数组，数组的元素的先后顺序就是单词的顺序
    // 2. 对数组进行遍历，然后每个元素进行反转
    let arr = str.split(' ')
    let result = arr.map(item => {
        return item.split('').reverse().join('')
    })
    return result.join(' ')
}
*/

/* // 方法一简化
export default (str) => {
    return str.split(' ').map(item => item.split('').reverse().join('')).join(' ')
}
*/

/* // 方法二：用正则
 * // \s表示空格
export default (str) => {
    return str.split(/\s/g).map(item => item.split('').reverse().join('')).join(' ')
}
*/

// 方法三：用String.prototype.match
// match()方法类似indexOf()，但是它返回指定的值，而不是字符串的位置
export default (str) => {
    // []里面为可选项 \w为字符 [\w']+可以匹配到Let's
    return str.match(/[\w']+/g).map(item => item.split('').reverse().join('')).join(' ')
}
