/*
 * @Autor: ERP
 * @Email: 邮箱
 * @Description: 两个数组的交集
 * @CreateDate: Do not edit
 * @LastEditors: liuzilei3
 */
/* 
题目链接： https://leetcode.cn/problems/intersection-of-two-arrays/description/
给定两个数组 nums1 和 nums2 ，返回它们的交集。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序。

示例 1：

输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]

示例 2：

输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]
解释：[4,9] 也是可通过的
 
提示：
1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000 
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const sameSet = new Set()
    nums1.forEach(item => {
        sameSet.add(item)
    })
    const res = []
    nums2.forEach(item => {
        if (sameSet.has(item)) {
            res.push(item)
            sameSet.delete(item)
        }
    })
    return res
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const lenNum1 = nums1.length, lenNum2 = nums2.length
    nums1.sort((x, y) => x-y)
    nums2.sort((x, y) => x-y)
    let sign1 = 0, sign2 = 0
    const res = []
    while (sign1 < lenNum1 && sign2 < lenNum2) {
        if (nums1[sign1] === nums2[sign2]) {
            if (!res.length || res[res.length - 1] !== nums1[sign1]) {
                res.push(nums1[sign1])
            }
            sign1++
            sign2++
        } else {
            if (nums1[sign1] > nums2[sign2]) sign2++
            else sign1++
        }
    }
    return res
};