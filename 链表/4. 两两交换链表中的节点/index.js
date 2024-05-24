/*
 * @Autor: ERP
 * @Email: 邮箱
 * @Description: 两两交换链表中的节点
 * @CreateDate: Do not edit
 * @LastEditors: liuzilei3
 */
/* 
题目链接：https://leetcode.cn/problems/swap-nodes-in-pairs/description/
给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
详细：https://code-thinking.cdn.bcebos.com/pics/24.%E4%B8%A4%E4%B8%A4%E4%BA%A4%E6%8D%A2%E9%93%BE%E8%A1%A8%E4%B8%AD%E7%9A%84%E8%8A%82%E7%82%B9-%E9%A2%98%E6%84%8F.jpg 
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
// 迭代
var swapPairs = function(head) {
    if(!head || !head.next) return head
    let dummyNode = new ListNode()
    let fir = head, sec = head?.next, res = sec
    while(fir && sec) {
        let nex = sec?.next ? sec.next : null 
        dummyNode.next = sec
        sec.next = fir
        fir.next = nex
        // 后移节点
        dummyNode = fir
        fir = nex
        sec = nex?.next ? nex.next : null
    }
    return res
}; 

// 递归
var swapPairs = function(head) {
    if(!head || !head.next) return head
    const nex = head.next, conNode = nex.next
    nex.next = head;
    head.next = swapPairs(conNode)
    return nex
}; 