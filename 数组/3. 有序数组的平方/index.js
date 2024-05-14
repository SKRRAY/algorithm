/*
 * @Autor: ERP
 * @Email: 邮箱
 * @Description: 有序数组的平方
 * @CreateDate: Do not edit
 * @LastEditors: liuzilei3
 */
/* 
题目地址：https://leetcode.cn/problems/squares-of-a-sorted-array/description/
给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

示例 1：

输入：nums = [-4,-1,0,3,10]
输出：[0,1,9,16,100]
解释：平方后，数组变为 [16,1,0,9,100]，排序后，数组变为 [0,1,9,16,100]
示例 2：

输入：nums = [-7,-3,2,3,11]
输出：[4,9,9,49,121] 
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let res = [];
    let sta = 0, end = nums.length - 1;
    while(sta <= end) {
        res.unshift(Math.abs(nums[sta]) >= Math.abs(nums[end]) ? Math.pow(nums[sta++], 2) : Math.pow(nums[end--], 2))
    }
    return res
};


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    nums.sort(function(val1, val2) {
        return Math.abs(val1) - Math.abs(val2) 
    })
    let res = [];
    nums.forEach(item => {
        res.push(Math.pow(item, 2))
    });
    return res;
};