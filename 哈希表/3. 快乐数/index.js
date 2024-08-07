/*
 * @Autor: ERP
 * @Email: 邮箱
 * @Description: 快乐数
 * @CreateDate: Do not edit
 * @LastEditors: liuzilei3
 */
/* 
题目链接：https://leetcode.cn/problems/happy-number/description/
编写一个算法来判断一个数 n 是不是快乐数。

「快乐数」定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。如果 可以变为  1，那么这个数就是快乐数。

如果 n 是快乐数就返回 True ；不是，则返回 False 。

示例：

输入：19
输出：true
解释：
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1 
*/

/**
 * @param {number} n
 * @return {boolean}
 */
const caluPowSum = (n) => {
    let res = 0
    while(n > 0) {
        res += Math.pow((n%10), 2)
        n = Math.floor(n/10)
    }
    return res
}
 
var isHappy = function(n) {
    if (n === 1) return true
    // 使用哈希表记录每次得到的值，如果某一值出现了两次说明陷入循环，弹出
    const recordSet = new Set()
    while(!recordSet.has(n)) {
        recordSet.add(n)
        n = caluPowSum(n)
        if (n === 1) return true
    }
    return false
};