// 给定两个非空链表来表示两个非负整数。位数按照逆序方式存储，它们的每个节点只存储单个数字。将两数相加返回一个新的链表。

// 你可以假设除了数字 0 之外，这两个数字都不会以零开头。

// 示例：

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const res = new ListNode()
  const getVal = (obj) => obj ? obj.val : 0
  const getNext = (obj) => obj ? obj.next : obj
  let listNow = res
  let nextAdd = 0
  const bit = 10
  const floor = Math.floor
  while (l1 || l2 || nextAdd > 0)
  {
    let value1 = getVal(l1)
    let value2 = getVal(l2)
    const val = value1 + value2 + nextAdd
    nextAdd = floor(val / bit)
    listNow.next = new ListNode(val % bit)
    listNow = listNow.next
    l1 = getNext(l1)
    l2 = getNext(l2)
  }
  return res.next
}