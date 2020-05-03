/*
 * @Author: jiayufei
 * @Date: 2020-05-02 15:33:02
 * @LastEditors: jiayufei
 * @LastEditTime: 2020-05-03 17:48:11
 * @Description:
 */
const convert: (str: string, numRow: number) => string = function (
	str: string,
	numRow: number
): string {
	if (numRow === 1) {
		return str
	}
	// allocating n arrays, n = numRow
	const arr: Array<Array<string>> = []
	for (let i = 0; i < numRow; i++) {
		arr[i] = []
	}
	// convert str to an array
	const strArr = str.split('')
	const len = strArr.length
	const blockLen = numRow * 2 - 2
	const blockNum = Math.ceil(len / blockLen)
	for (var i = 0; i < blockNum; i++) {
		const j = i * blockLen
		// i representing: which the block is this one;
		// j representing: The block's first index.
		for (var k = 0; k < blockLen && j + k < len; k++) {
			// if () {
			arr[k < numRow ? k : 2 * (numRow - 1) - k].push(strArr[j + k])
			// } else {
			// continue
			// }
		}
	}
	/* output */
	let res: Array<Array<string>> = []
	for (let m = 0; m < numRow; m++) {
		res = res.concat(arr[m])
	}
	return res.join('')
}

/* test case */
// console.log(convert('PAYPALISHIRING', 4)) // expect: PINALSIGYAHRPI
console.log(convert('A', 1)) // expect: PINALSIGYAHRPI
