'use strict'
/*
 * @Author: jiayufei
 * @Date: 2020-04-27 23:49:14
 * @LastEditors: jiayufei
 * @LastEditTime: 2020-05-04 10:58:11
 * @Description: Bruce Force
 */
var longestPalindrome = function (str) {
	// arr & arr_rv(reversed)
	var arr = str.split(''),
		arr_rv = arr.slice(),
		len = arr.length
	arr_rv.reverse()
	var res = []
	for (var idx_rv = 0; idx_rv < len; idx_rv++) {
		for (var idx = 0; idx < len; idx++) {
			var tempIdx = idx
			var tempIdxRv = idx_rv
			var tempRes = []
			while (
				tempIdx < len &&
				tempIdxRv < len &&
				arr[tempIdx] === arr_rv[tempIdxRv]
			) {
				tempRes.push(arr_rv[tempIdxRv])
				tempIdx++
				tempIdxRv++
			}
			if (
				tempRes.length > res.length &&
				_isPalindrome(tempRes, tempRes.slice().reverse())
			) {
				res = tempRes
			}
			tempRes = []
		}
	}
	return res.join('')
}
var _isPalindrome = function (arr, arr_rv) {
	if (arr.length === 1) {
		return true
	}
	// loop arr & compare: Same index and same value.
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] !== arr_rv[i]) {
			return false
		}
	}
	return true
}
/* test case */
// console.log(longestPalindrome('a'))
console.log(
	longestPalindrome(
		'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
	)
)
