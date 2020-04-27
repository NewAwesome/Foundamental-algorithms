/*
 * @Author: jiayufei
 * @Date: 2020-04-27 23:49:14
 * @LastEditors: jiayufei
 * @LastEditTime: 2020-04-28 00:21:10
 * @Description: Bruce Force
 */
const longestPalindrome: (str: String) => String = function (
	str: String
): String {
	// arr & arr_rv(reversed)
	const arr = str.split(''),
		arr_rv = [...arr],
		len = arr.length
	arr_rv.reverse()

	// two pointers
	let res = []

	for (let idx_rv = 0; idx_rv < len; idx_rv++) {
		for (let idx = 0; idx < len; idx++) {
			let tempIdx = idx
			let tempIdxRv = idx_rv
			let tempRes = []
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
