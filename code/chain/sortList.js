/**
 * 单链表快速排序
 * 快速排序的原理：
 *     选一个基准元素（默认情况选第一个元素为基准元素），把所有小于基准元素的放左边，大于基准元素的放右边，
 *     再将基准元素左右两边元素分别继续上述过程
 * 单链表快排序：
 *     和数组快速排序有区别，数组只有一个遍历索引，链表有两个指针
 *     原理：链表有两个指针p和q，移动（遍历）q指针，判断小于基准元素的值，则将p指针的next元素值和q指针元素值交换，同时将p指针移动到p的next处；
 *          继续遍历q直到q遍历完，交换基准元素和p指针元素；子链继续重复上述过程
 * leetcode排序链表：https://leetcode-cn.com/problems/sort-list/
 */

// 题目中时间复杂度为O(n log n)，快速排序符合

// 模拟单链表的节点，有value和next属性
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
// 模拟单链表的数据结构
class NodeList {
    constructor(arr) {
        let head = new Node(arr.shift()) // 取头节点
        let node = head
        arr.forEach(item => {
            node.next = new Node(item) // 节点保存了value和next属性
            node = node.next
        });
        return head // 返回头节点，单链表只能通过头节点访问
    }
}

// 交换两个节点的值
let swap = (p, q) => {
    let temp = p.value
    p.value = q.value
    q.value = temp
}

// 寻找基准元素节点
let partion = (begin, end) => {
    if(!begin) return // 边界
    let firstValue = begin.value // 基准元素的值
    let p = begin // p指针
    let q = begin.next // q指针
    while (q && q !== end) { // q指针没有遍历完
        if (q.value < firstValue) {
            // q指针值小于基准元素值，则将p指针的next元素值和q指针元素值交换
            swap(p.next, q)
            // 将p指针移动到p的next处
            p = p.next
        }
        // 移动q指针继续遍历
        q = q.next
    }
    // 遍历完成后将基准元素值和p指针元素值交换，让基准元素跑到中间去，
    // 这样小于基准元素的所有元素在左边，大于基准元素的在右边
    swap(p, begin)
    // 返回p指针，此时p指针指向的是基准元素(在中间)
    return p
}

// 排序
const sort = (begin, end) => { // begin为起始节点，end为终止节点
    if (begin !== end) {
        let part = partion(begin, end) // 获取基准元素
        // 递归快速排序基准元素左边和右边的
        if (part) {
            sort(begin, part)
            sort(part.next, end)
        }
    }
}

export default sort
export {
    Node,
    NodeList
}