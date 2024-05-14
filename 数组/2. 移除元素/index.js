/*
 * @Autor: ERP
 * @Email: 邮箱
 * @Description: 移除元素
 * @CreateDate: Do not edit
 * @LastEditors: liuzilei3
 */
/* 
题目链接：https://leetcode.cn/problems/remove-element/description/
给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并原地修改输入数组。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

示例 1: 给定 nums = [3,2,2,3], val = 3, 函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。 你不需要考虑数组中超出新长度后面的元素。

示例 2: 给定 nums = [0,1,2,2,3,0,4,2], val = 2, 函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。

你不需要考虑数组中超出新长度后面的元素。 
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // 设置头尾指针
    let first = 0, end = nums.length - 1;
    while (first <= end) {
        if(nums[first] !== val) first++
        else {
            // 找到第一个后置值，放到数组末尾
            nums[first] = nums[end]
            end--;
        }
    }
    return first 
};

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let first = 0
    for(let second = 0; second < nums.length; second++) {
        if (nums[second] !== val) {
            nums[first] = nums[second];
            first++;
        }
    }
    return first 
};