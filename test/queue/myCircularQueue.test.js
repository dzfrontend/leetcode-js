import MyCircularQueue from '../../code/queue/myCircularQueue'

test('MyCircularQueue', () => {
    let queue = new MyCircularQueue(3)
    expect(queue.isEmpty()).toBe(true)
    expect(queue.enQueue(1)).toBe(true)
    expect(queue.enQueue(2)).toBe(true)
    expect(queue.enQueue(3)).toBe(true)
    expect(queue.enQueue(4)).toBe(false) // 返回 false，队列已满
    expect(queue.isFull()).toBe(true) // 队列已满 true
    expect(queue.deQueue()).toBe(1) // 删除并返回表头元素
    expect(queue.enQueue(4)).toBe(true)
    expect(queue.Front()).toBe(2) // 表头元素为2
    expect(queue.Rear()).toBe(4) // 表尾元素为4
})