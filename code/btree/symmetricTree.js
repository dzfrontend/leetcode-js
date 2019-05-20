/**
 * 对称二叉树
 * 原理：先实现二叉树的数据结构，再判断左节点和右节点的值是否相等，进一步递归判断当前节点的左节点的左右节点和右节点的右左节点值是否相等
 * 对称二叉树：https://leetcode-cn.com/problems/symmetric-tree/
 */

// 声明二叉树的节点
class Node {
    constructor(val) {
        this.val = val
        this.left = this.right = undefined
    }
}

// 声明二叉树
class Tree {
    constructor(data) {
        // 临时存储所有节点，方便查找父子节点
        let tempNodeList = []
        // 顶节点
        let root
        for (let i = 0, len = data.length; i < len; i++) {
            let node = new Node(data[i])
            tempNodeList.push(node)
            if (i > 0) { // 二叉树不在顶节点
                // 计算当前节点在哪一层
                let n = Math.floor(Math.sqrt(i + 1)) // Math.sqrt求平方根
                // 通过层级来计算当前层的起始索引
                let q = Math.pow(2, n) - 1 // 例如第1层的起始索引是1，此时i=1,2
                // 计算上一层的起始索引
                let p = Math.pow(2, n - 1) - 1
                // 找到当前节点的父节点
                let parent = tempNodeList[p + Math.floor((i - q) / 2)]
                // 将当前节点和上一层的父节点做关联
                if(parent.left) {
                    parent.right = node
                }else {
                    parent.left = node
                }
            }
        }
        root = tempNodeList.shift() // 取出顶节点
        tempNodeList.length = 0 // 使用完临时tempNodeList释放内存
        return root // 返回顶节点
    }
    static isSymmetry(root) {
        if (!root) {
            return true
        }
        let walk = (left, right) => {
            if (!left && !right) { // 没有左右节点，对称
                return true
            }
            if((left && !right) || (!left && right) || (left.val !== right.val)) { // 左节点和右节点值不相等，不对称
                return false
            }
            // 递归当前节点的左节点的左右节点和右节点的右左节点
            return walk(left.left, right.right) && walk(left.right, right.left)
        }
        return walk(root.left, root.right) // 从根节点开始执行
    }
}

export default Tree