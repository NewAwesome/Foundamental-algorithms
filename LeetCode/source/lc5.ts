/*
 * @Description: Find the longest palindromic substring in the given string.
 * @Author: jiayufei
 * @Date: 2019-12-25 23:47:54
 * @LastEditors  : jiayufei
 * @LastEditTime : 2020-01-17 08:17:46
 */
/**
 * @param {string} s
 * @return {string}
 */
// FIXME: Wrong Answer. Seems that tht origin s and reversed s' should have the longest common substring without remain the same index.
let longestPalindrome1: (s: string) => string = function(s: string): string {
  const arr = s.split("");
  const _arr = s.split("").reverse();
  let rsArr: Array<String> = [];
  for (let i = 0; i < arr.length; i++) {
    let temp: Array<String> = [];
    for (let j = i; j < arr.length; j++) {
      if (arr[j] === _arr[j]) {
        temp.push(arr[j]);
      } else {
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
