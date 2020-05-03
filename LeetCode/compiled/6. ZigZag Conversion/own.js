"use strict";
/*
 * @Author: jiayufei
 * @Date: 2020-05-02 15:33:02
 * @LastEditors: jiayufei
 * @LastEditTime: 2020-05-03 17:48:11
 * @Description:
 */
var convert = function (str, numRow) {
    if (numRow === 1) {
        return str;
    }
    // allocating n arrays, n = numRow
    var arr = [];
    for (var i_1 = 0; i_1 < numRow; i_1++) {
        arr[i_1] = [];
    }
    // convert str to an array
    var strArr = str.split('');
    var len = strArr.length;
    var blockLen = numRow * 2 - 2;
    var blockNum = Math.ceil(len / blockLen);
    for (var i = 0; i < blockNum; i++) {
        var j = i * blockLen;
        // i representing: which the block is this one;
        // j representing: The block's first index.
        for (var k = 0; k < blockLen && j + k < len; k++) {
            // if () {
            arr[k < numRow ? k : 2 * (numRow - 1) - k].push(strArr[j + k]);
            // } else {
            // continue
            // }
        }
    }
    /* output */
    var res = [];
    for (var m = 0; m < numRow; m++) {
        res = res.concat(arr[m]);
    }
    return res.join('');
};
/* test case */
// console.log(convert('PAYPALISHIRING', 4)) // expect: PINALSIGYAHRPI
console.log(convert('A', 1)); // expect: PINALSIGYAHRPI
