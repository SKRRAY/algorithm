/*
 * @Autor: ERP
 * @Email: 邮箱
 * @Description: 移除链表元素
 * @CreateDate: Do not edit
 * @LastEditors: liuzilei3
 */
/* 
题目链接： https://leetcode.cn/problems/remove-linked-list-elements/description/
题意：删除链表中等于给定值 val 的所有节点。

示例 1： 输入：head = [1,2,6,3,4,5,6], val = 6 输出：[1,2,3,4,5]

示例 2： 输入：head = [], val = 1 输出：[]

示例 3： 输入：head = [7,7,7,7], val = 7 输出：[]

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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let p = head
    while(p) {
        if (p.next?.val === val) {
            p.next = p.next.next
        } else p = p.next
    }
    return head?.val === val ? head.next : head
};

var removeElements = function(head, val) {
    if (!head) return head
    head.next = removeElements(head.next, val)
    return head.val === val ? head.next : head
};