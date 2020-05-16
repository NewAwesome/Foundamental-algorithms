"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
/*
 * @Author: jiayufei
 * @Date: 2020-04-27 23:49:14
 * @LastEditors: jiayufei
 * @LastEditTime: 2020-05-04 10:56:18
 * @Description: Bruce Force
 */
var longestPalindrome = function (str) {
    // arr & arr_rv(reversed)
    var arr = str.split(''), arr_rv = __spreadArrays(arr), len = arr.length;
    arr_rv.reverse();
    var res = [];
    for (var idx_rv = 0; idx_rv < len; idx_rv++) {
        for (var idx = 0; idx < len; idx++) {
            var tempIdx = idx;
            var tempIdxRv = idx_rv;
            var tempRes = [];
            while (tempIdx < len &&
                tempIdxRv < len &&
                arr[tempIdx] === arr_rv[tempIdxRv]) {
                tempRes.push(arr_rv[tempIdxRv]);
                tempIdx++;
                tempIdxRv++;
            }
            if (tempRes.length > res.length &&
                _isPalindrome(tempRes, __spreadArrays(tempRes).reverse())) {
                res = tempRes;
            }
            tempRes = [];
        }
    }
    return res.join('');
};
var _isPalindrome = function (arr, arr_rv) {
    if (arr.length === 1) {
        return true;
    }
    // loop arr & compare: Same index and same value.
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== arr_rv[i]) {
            return false;
        }
    }
    return true;
};
/* test case */
// console.log(longestPalindrome('a'))
console.log(longestPalindrome('aacdefcaa'));
