"use strict";
/*
 * @Description: Find the longest palindromic substring in the given string.
 * @Author: jiayufei
 * @Date: 2019-12-25 23:47:54
 * @LastEditors  : jiayufei
 * @LastEditTime : 2020-01-17 08:13:40
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome1 = function (s) {
    var arr = s.split("");
    var _arr = s.split("").reverse();
    var rsArr = [];
    for (var i = 0; i < arr.length; i++) {
        var temp = [];
        for (var j = i; j < arr.length; j++) {
            if (arr[j] === _arr[j]) {
                temp.push(arr[j]);
            }
            else {
                if (arr[i] !== arr[j]) {
                    temp = [];
                    break;
                }
                temp.length > rsArr.length ? (rsArr = temp) : "";
                temp = [];
                break;
            }
        }
    }
    return rsArr.join("");
};
