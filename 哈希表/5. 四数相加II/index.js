/*
 * @Autor: ERP
 * @Email: 邮箱
 * @Description: 四数相加II
 * @CreateDate: Do not edit
 * @LastEditors: liuzilei3
 */
/* 
题目链接：https://leetcode.cn/problems/4sum-ii/description/
给定四个包含整数的数组列表 A , B , C , D ,计算有多少个元组 (i, j, k, l) ，使得 A[i] + B[j] + C[k] + D[l] = 0。

为了使问题简单化，所有的 A, B, C, D 具有相同的长度 N，且 0 ≤ N ≤ 500 。所有整数的范围在 -2^28 到 2^28 - 1 之间，最终结果不会超过 2^31 - 1 。

例如:

输入:

A = [ 1, 2]
B = [-2,-1]
C = [-1, 2]
D = [ 0, 2]
输出:

2

解释:

两个元组如下:

(0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
(1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0
# 
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    const resMap = new Map()
    let sum = 0
    for(const n1 of nums1) {
        for(const n2 of nums2) {
            sum = n1 + n2
            resMap.set(sum, resMap.get(sum) || 0)
        }
    }
    const count = 0

    for(const n3 of nums3) {
        for(const n4 of nums4) {
            count = resMap.get(0-(n3+n4)) || 0
        }
    }

    return count
};