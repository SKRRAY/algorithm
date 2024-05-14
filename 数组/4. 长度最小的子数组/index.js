/*
 * @Autor: ERP
 * @Email: 邮箱
 * @Description: 长度最小的子数组
 * @CreateDate: Do not edit
 * @LastEditors: liuzilei3
 */
/* 
题目链接： https://leetcode.cn/problems/minimum-size-subarray-sum/description/
给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。

示例：

输入：s = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。
提示：

1 <= target <= 10^9
1 <= nums.length <= 10^5
1 <= nums[i] <= 10^5 
*/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0, right = 0, sum = 0, max = nums.length + 1;
    while (right < nums.length) {
        sum += nums[right]
        while (sum >= target) {
            let size = right - left + 1
            max = max > size ? size : max
            sum -= nums[left++]
        }
        right ++
    }
    return max > nums.length ? 0 : max;
};