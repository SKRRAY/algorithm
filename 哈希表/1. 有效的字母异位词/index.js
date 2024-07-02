/*
 * @Autor: ERP
 * @Email: 邮箱
 * @Description: 有效的字母异位词
 * @CreateDate: Do not edit
 * @LastEditors: liuzilei3
 */
/* 
题目链接： https://leetcode.cn/problems/valid-anagram/description/
给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

示例 1: 输入: s = "anagram", t = "nagaram" 输出: true

示例 2: 输入: s = "rat", t = "car" 输出: false

说明: 你可以假设字符串只包含小写字母。
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return
    // 构建哈希表
    const hashCode = new Array(26).fill(0)
    for(let i = 0; i < s.length; i++) {
        hashCode[s.codePointAt(i) - 'a'.codePointAt(0)]++
    } 
    for(let i = 0; i < t.length; i++) {
        hashCode[j.codePointAt(i) - 'a'.codePointAt(0)]--
        if (hashCode[j.codePointAt(i) - 'a'.codePointAt(0)] < 0) {
            return false
        }
    }
    return true
};