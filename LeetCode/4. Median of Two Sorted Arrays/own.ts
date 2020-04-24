const findMedianSortedArrays: (
  arr1: Array<number>,
  arr2: Array<number>
) => number = function (arr1: Array<number>, arr2: Array<number>): number {
  let A = arr1,
    B = arr2;
  // make sure we always search the shorter one
  if (arr1.length > arr2.length) {
    const temp = A;
    A = B;
    B = temp;
  }
  const aLen = A.length,
    bLen = B.length;
  // computing the left part length of the sorted array
  const leftPartLen = getLeftPartLength(aLen + bLen);
  // computing the number range of values A could contribute
  let [aMin, aMax] = [0, aLen];
  while (aMin <= aMax) {
    let aCount = Math.ceil((aMax + aMin) / 2);
    let bCount = leftPartLen - aCount;
    // NOTE: Edge Case. The x||y||xp||yp possible not exist.
    const x = aCount > 0 ? A[aCount - 1] : null,
      y = bCount > 0 ? B[bCount - 1] : null,
      xp = aCount < aLen ? A[aCount] : null,
      yp = bCount < bLen  ? B[bCount] : null;
    // NOTE: while x||yp not exist. stop compare, because 4>null equals true
    if (x && yp && x > yp) {
      aMax = aCount - 1;
    } else if (y && xp && y > xp) {
      aMin = aCount + 1;
    } else {
      let leftPartEnd = x === null ? y : y === null ? x : Math.max(x, y);
      // if total num is odd
      if ((aLen + bLen) % 2 === 1) {
        return leftPartEnd;
        
      }
      // else if total num is even
      let rightPartStart = xp===null?yp:yp===null?xp:Math.min(xp,yp);
      return (leftPartEnd+rightPartStart)/2.0
    }
  }
};

const getLeftPartLength: (len: number) => number = (len: number): number => {
  return Math.ceil(len / 2);
};

/* test case */
// console.log(findMedianSortedArrays([1, 3], [2]));
// console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(
  findMedianSortedArrays([4, 20, 32, 50, 55, 61], [1, 15, 22, 30, 70])
);
