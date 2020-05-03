/*
 * @Author: jiayufei
 * @Date: 2020-04-27 23:49:14
 * @LastEditors: jiayufei
 * @LastEditTime: 2020-05-03 18:03:03
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
			if (tempRes.length > res.length) {
				res = tempRes
			}
			tempRes = []
		}
	}
	return res.join('')
}

/* test case */
// console.log(longestPalindrome('a'))
console.log(longestPalindrome('aacdefcaa'))
