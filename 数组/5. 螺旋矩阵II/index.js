/*
 * @Autor: ERP
 * @Email: 邮箱
 * @Description: 螺旋矩阵II
 * @CreateDate: Do not edit
 * @LastEditors: liuzilei3
 */
/* 
题目链接：https://leetcode.cn/problems/spiral-matrix-ii/description/
给定一个正整数 n，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。

示例:

输入: 3 输出: [ [ 1, 2, 3 ], [ 8, 9, 4 ], [ 7, 6, 5 ] ]

# 
*/

/**
 * @param {number} n
 * @return {number[][]}
 */
// 模拟
var generateMatrix = function(n) {
    const direction = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let res = new Array(n).fill().map(() => new Array(n).fill(0));
    let sign = 0, row = 0, col = 0, num = 1;
    while(num <= Math.pow(n, 2)) {
        res[row][col] = num
        num ++
        let nextRow = direction[sign][0] + row
        let nextCol = direction[sign][1] + col
        if (nextRow >= n || nextCol >= n || nextRow < 0 || nextCol <0 || res[nextRow][nextCol] !== 0) {
            sign = (sign + 1) % 4
        }
        row += direction[sign][0]
        col += direction[sign][1]
    }
    return res;
};

// 模拟，比上面慢点
var generateMatrix = function(n) {
    const direction = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let res = new Array(n).fill().map(() => new Array(n).fill(0));
    let sign = 0, row = 0, col = 0, num = 1
    while(num <= Math.pow(n, 2)) {
        res[row][col] = num;
        num ++
        if (sign === 0) {
            if (col === n-1 || res[row][col + 1] !== 0) sign = (sign + 1) % 4
        } else if (sign === 1) {
            if (row === n-1 || res[row + 1][col] !== 0)  sign = (sign + 1) % 4
        } else if (sign === 2) {
            if (col === 0 || res[row][col -1 ] !== 0) sign = (sign + 1) % 4
        } else {
            if (row === 0 || res[row -  1][col] !== 0) sign = (sign + 1) % 4
        }
        const dir = direction[sign];
        row += dir[0];
        col += dir[1];
    }
    return res;
};

// 按层模拟
var generateMatrix = function(n) {
    let res = new Array(n).fill().map(() => new Array(n).fill(0));
    let num = 1
    let left = 0, right = n-1, top = 0, bottom = n-1
    while(left <= right && top <= bottom) {
        for(let col = left; col <= right; col++) {
            res[top][col] = num
            num ++
        }
        for (let row = top + 1; row <= bottom; row++){
            res[row][right] = num
            num ++
        }
        if (right > left && bottom > top) {
            for(let col = right - 1; col >= left; col--) {
                res[bottom][col] = num
                num ++
            }
            for(let row = bottom - 1; row > top; row--) {
                res[row][left] = num
                num ++
            }
        }
        left++
        right--
        top++
        bottom--
    }
    return res;
};
