/*
 * @Author: jiayufei
 * @Date: 2020-05-03 17:19:21
 * @LastEditors: jiayufei
 * @LastEditTime: 2020-05-03 17:42:49
 * @Description:
 */
const findMedianSortedArrays: (
	arr1: Array<number>,
	arr2: Array<number>
) => number | undefined = function (
	arr1: Array<number>,
	arr2: Array<number>
): number | undefined {
	let A: Array<number> = arr1,
		B: Array<number> = arr2
	// make sure we always search the shorter one
	if (arr1.length > arr2.length) {
		const temp: Array<number> = A
		A = B
		B = temp
	}
	const aLen: number = A.length,
		bLen: number = B.length
	// computing the left part length of the sorted array
	const leftPartLen: number = getLeftPartLength(aLen + bLen)
	// computing the number range of values A could contribute
	let [aMin, aMax] = [0, aLen]
	while (aMin <= aMax) {
		let aCount = Math.ceil((aMax + aMin) / 2)
		let bCount = leftPartLen - aCount
		// NOTE: Edge Case. The x||y||xp||yp possible not exist.
		const x = aCount > 0 ? A[aCount - 1] : null,
			y = bCount > 0 ? B[bCount - 1] : null,
			xp = aCount < aLen ? A[aCount] : null,
			yp = bCount < bLen ? B[bCount] : null
		// NOTE: while x||yp not exist. stop compare, because 4>null equals true
		if (x && yp && x > yp) {
			aMax = aCount - 1
		} else if (y && xp && y > xp) {
			aMin = aCount + 1
		} else {
			// TODO: because of tslint, all we know the x&y can't all be null. But editor didnt know this, so assign -999, but the situation will never occur.
			let leftPartEnd: number =
				x === null ? (y === null ? -999 : y) : y === null ? x : Math.max(x, y)
			// if total num is odd
			if (leftPartEnd && (aLen + bLen) % 2 === 1) {
				return leftPartEnd
			}
			// else if total num is even
			let rightPartStart =
				xp === null
					? yp === null
						? -999
						: yp
					: yp === null
					? xp
					: Math.min(xp, yp)
			return (leftPartEnd + rightPartStart) / 2.0
		}
		return undefined
	}
	return undefined
}

const getLeftPartLength: (len: number) => number = (len: number): number => {
	return Math.ceil(len / 2)
}

/* test case */
// console.log(findMedianSortedArrays([1, 3], [2]));
// console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(
	findMedianSortedArrays([4, 20, 32, 50, 55, 61], [1, 15, 22, 30, 70])
)
