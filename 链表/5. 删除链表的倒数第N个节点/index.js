/*
 * @Autor: ERP
 * @Email: 邮箱
 * @Description: 删除链表的倒数第N个节点
 * @CreateDate: Do not edit
 * @LastEditors: liuzilei3
 */
/* 
题目链接：https://leetcode.cn/problems/remove-nth-node-from-end-of-list/description/
给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

进阶：你能尝试使用一趟扫描实现吗？
详细：https://code-thinking-1253855093.file.myqcloud.com/pics/20210510085957392.png
输入：head = [1,2,3,4,5], n = 2 输出：[1,2,3,5] 示例 2：

输入：head = [1], n = 1 输出：[] 示例 3：

输入：head = [1,2], n = 1 输出：[1]

# 
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummyNode = new ListNode()
    dummyNode.next = head
    let sta = dummyNode, end = dummyNode
    while(n && end) {
        end = end.next
        n--
    }
    while(end?.next) {
        sta = sta.next
        end = end.next
    }
    sta.next = sta.next.next
    return dummyNode.next
}