/*
 * @Autor: ERP
 * @Email: 邮箱
 * @Description: 两数之和
 * @CreateDate: Do not edit
 * @LastEditors: liuzilei3
 */
/* 
题目链接：https://leetcode.cn/problems/two-sum/description/
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9

所以返回 [0, 1]

# 
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const res = []
    if (!nums) return res
    for(let i = 0; i < nums.length; i++) {
        const otherNum = target - nums[i]
        for(let j = i+1; j <= nums.length; j++) {
            if(nums[j] === otherNum) {
                return [i, j]
            }
        }
    }
    return res
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if (!nums) return []
    const arrayMap = {}
    for(let i = 0; i < nums.length; i++) {
        const otherNum = target - nums[i]
        if (arrayMap[otherNum] !== undefined) {
            return [i, arrayMap[otherNum]]
        }
        arrayMap[nums[i]] = i
    }
    return []
};