/*
 * @Autor: ERP
 * @Email: 邮箱
 * @Description: 反转链表
 * @CreateDate: Do not edit
 * @LastEditors: liuzilei3
 */
/* 
题目链接：https://leetcode.cn/problems/reverse-linked-list/description/
题意：反转一个单链表。

示例: 输入: 1->2->3->4->5->NULL 输出: 5->4->3->2->1->NULL
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
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) return head
    let fir = head, nex = head.next;
    fir.next = null;
    while(nex) {
        let tmp = nex
        nex = nex.next
        tmp.next = fir.next
        fir.next = tmp
        let tmpVal = fir.val
        fir.val = tmp.val
        tmp.val = tmpVal
    }
    return fir
};

var reverseList = function(head) {
    if (!head) return head
    let mov = head, tmpHead = head.next, nextNode
    mov.next = null
    while (tmpHead) {
        nextNode = tmpHead.next
        tmpHead.next = mov
        mov = tmpHead
        tmpHead = nextNode
        nextNode = nextNode.next
    }
    return mov
};

var reverseList = function(head) {
    if (!head || !head.next) return head
    const nextHead = reverseList(head.next)
    head.next.next = head
    head.next = null
    return nextHead 
};