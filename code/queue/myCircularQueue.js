/**
 * 队列的概念：
 *     队列是一种特殊的线性表，只允许在表的前端(队头)进行删除操作(称为出队)，在表的后端(队尾)进行插入操作(称为入队)，和栈一样，队列是一种操作受限的线性表。
 *     队列中的数据元素又称为队列元素，队列中没有元素时，称为空队列。队列又称为先进先出线性表，因为只有先进入队列的元素才能先从队列中删除。
 * 队列的核心：利用队首和队尾指针进行队列数据的添加、删除操作，队首和队尾指针都可以移动
 *
 * leetcode设计循环队列：https://leetcode-cn.com/problems/design-circular-queue/
 */

class MyCircularQueue {
    constructor(k) {
        // 用来保存长度为k的队列
        this.list = Array(k)
        // 队首指针 队首和队尾指针一刚开始都为0
        this.front = 0
        // 队尾指针
        this.rear = 0
        // 队列的长度
        this.len = k
    }
    // 向循环队列插入一个元素
    enQueue(num) {
        if (this.isFull()) { // 已满
            return false
        }
        this.list[this.rear] = num // 在尾指针处插入元素
        this.rear = (this.rear + 1) % this.len // 尾指针加1，但考虑到循环队列，超过队列长度则取模
        return true // 添加成功返回true
    }
    // 删除一个元素
    deQueue() {
        let v = this.list[this.front]
        this.list[this.front] = '' // 将头指针处元素删除
        this.front = (this.front + 1) % this.len // 头指针加1
        return v
    }
    // 循环队列为空
    isEmpty() {
        // 队首和队尾元素为空，头指针和尾指针位置相同
        return this.front === this.rear && !this.list[this.front]
    }
    // 循环队列已满
    isFull() {
        return this.front === this.rear && !!this.list[this.front]
    }
    // 获取队首元素
    Front() {
        return this.list[this.front]
    }
    // 获取队尾元素
    Rear() {
        let rearIndex = this.rear - 1 // 队尾指针比队尾元素位置大1，
        // 如果队尾指针为0，也就是rearIndex为-1，则需要判断
        return this.list[rearIndex === -1 ? this.len - 1 : rearIndex]
    }
}

export default MyCircularQueue