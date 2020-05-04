/*
 * @Author: jiayufei
 * @Date: 2020-04-27 23:49:14
 * @LastEditors: jiayufei
 * @LastEditTime: 2020-05-04 10:56:18
 * @Description: Bruce Force
 */
const longestPalindrome: (str: string) => string = function (
	str: string
): string {
	// arr & arr_rv(reversed)
	const arr: string[] = str.split(''),
		arr_rv: string[] = [...arr],
		len: number = arr.length
	arr_rv.reverse()

	let res: string[] = []

	for (let idx_rv = 0; idx_rv < len; idx_rv++) {
		for (let idx = 0; idx < len; idx++) {
			let tempIdx: number = idx
			let tempIdxRv: number = idx_rv
			let tempRes: string[] = []
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
				_isPalindrome(tempRes, [...tempRes].reverse())
			) {
				res = tempRes
			}
			tempRes = []
		}
	}
	return res.join('')
}

const _isPalindrome: (
	arr: Array<string>,
	arr_rv: Array<string>
) => boolean = function (arr: Array<string>, arr_rv: Array<string>): boolean {
	if (arr.length === 1) {
		return true
	}
	// loop arr & compare: Same index and same value.
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== arr_rv[i]) {
			return false
		}
	}
	return true
}
/* test case */
// console.log(longestPalindrome('a'))
console.log(longestPalindrome('aacdefcaa'))
