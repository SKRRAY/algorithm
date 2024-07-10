/*
 * @Autor: ERP
 * @Email: 邮箱
 * @Description: 赎金信
 * @CreateDate: Do not edit
 * @LastEditors: liuzilei3
 */
/* 
题目链接：https://leetcode.cn/problems/ransom-note/description/
给定一个赎金信 (ransom) 字符串和一个杂志(magazine)字符串，判断第一个字符串 ransom 能不能由第二个字符串 magazines 里面的字符构成。如果可以构成，返回 true ；否则返回 false。

(题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，组成单词来表达意思。杂志字符串中的每个字符只能在赎金信字符串中使用一次。)

注意：

你可以假设两个字符串均只含有小写字母。

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true

# 
*/

/**
 * @description Map法
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const resMap = new Map()
    for(const char of magazine) {
        resMap.set(char, (resMap.get(char) || 0) + 1)
    }
    for(const char1 of ransomNote) {
        const findRes = resMap.get(char1)
        if(!findRes || findRes === 0) return
        resMap.set(char1, findRes - 1)
    }
    return true
};

/**
 * @description 数组法
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const resMap = new Array(26).fill(0)
    const initCode = 'a'.codePointAt(0)
    for (const tmpChar of magazine) {
        resMap[tmpChar.codePointAt(0) - initCode] ++
    }
    for (const tmpFindChar of ransomNote) {
        if (resMap[tmpFindChar.codePointAt(0) - initCode] === 0) return false
        resMap[tmpFindChar.codePointAt(0) - initCode] --
    }
    return true
};