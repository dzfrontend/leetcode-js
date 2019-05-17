import sort, { NodeList } from '../../code/chain/sortList'

test('sort:1', () => {
    let head = new NodeList([4, 2, 1, 3])
    sort(head) // 排序
    let res = []
    let node = head
    while(node) {
        res.push(node.value)
        node = node.next
    }
    expect(res).toEqual([1, 2, 3, 4])
})