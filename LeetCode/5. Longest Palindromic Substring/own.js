/*
 * @Author: jiayufei
 * @Date: 2020-04-27 23:49:14
 * @LastEditors: jiayufei
 * @LastEditTime: 2020-04-28 00:20:31
 * @Description:
 */
var longestPalindrome = function (str) {
	// arr & arr_rv(reversed)
	var arr = str.split(''),
		arr_rv = arr.slice(),
		len = arr.length
	arr_rv.reverse()
	// two pointers
	var res = []
	for (var idx_rv = 0; idx_rv < len; idx_rv++) {
		for (var idx = 0; idx < len; idx++) {
			var tempIdx = idx
			var tempIdxRv = idx_rv
			var tempRes = []
			while (arr[tempIdx] === arr_rv[tempIdxRv]) {
				tempRes.push(arr_rv[tempIdxRv])
				tempIdx++
				tempIdxRv++
			}
			if (tempRes.length > res.length) {
				res = tempRes
			}
			tempRes = []
		}
	}
	return res.join('')
}
/* test case */
console.log(longestPalindrome('babad'))
console.log(longestPalindrome('dabab'))
console.log(longestPalindrome('cbbd'))
