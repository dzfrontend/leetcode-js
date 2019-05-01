/**
 * 正则表达式之模式匹配：关于模式匹配请查找相关文档 => 推荐正则文档地址 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions
 * leetcode重复的子字符串
 * 真题链接：https://leetcode-cn.com/problems/repeated-substring-pattern/
 * */

const repeatedSubstring = (str) => {
    // \w为匹配字母，\w+匹配一个及以上字母
    // \1为模式匹配，匹配到的是括号(\w+)里面的内容，即再一次匹配一个及以上字母
    // 所以(\w+)匹配到的是一个子字符串，\1+模式匹配重复多个这样的子字符串，子字符串的意思是相对str来说的
    var reg = /^(\w+)\1+$/ 
    return reg.test(str)
}
export default repeatedSubstring