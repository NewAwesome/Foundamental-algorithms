var findMedianSortedArrays = function (arr1, arr2) {
    var A = arr1, B = arr2;
    // make sure we always search the shorter one
    if (arr1.length > arr2.length) {
        var temp = A;
        A = B;
        B = temp;
    }
    var aLen = A.length, bLen = B.length;
    // computing the left part length of the sorted array
    var leftPartLen = getLeftPartLength(aLen + bLen);
    // computing the number range of values A could contribute
    var _a = [0, aLen], aMin = _a[0], aMax = _a[1];
    while (aMin <= aMax) {
        var aCount = Math.ceil((aMax + aMin) / 2);
        var bCount = leftPartLen - aCount;
        // NOTE: Edge Case. The x||y||xp||yp possible not exist.
        var x = aCount > 0 ? A[aCount - 1] : null, y = bCount > 0 ? B[bCount - 1] : null, xp = aCount > 0 && A[aCount] ? A[aCount] : null, yp = bCount > 0 && B[bCount] ? B[bCount] : null;
        // NOTE: while x||yp not exist. stop compare, because 4>null equals true
        if (x && yp && x > yp) {
            aMax = aCount - 1;
        }
        else if (y && xp && y > xp) {
            aMin = aCount + 1;
        }
        else {
            var leftPartEnd = x === null ? y : (y === null ? x : Math.max(x, y));
            if ((aLen + bLen) % 2 !== 1) {
                if (x === null) {
                    leftPartEnd = (y + yp) / 2.0;
                }
                else if (y === null) {
                    leftPartEnd = (x + xp) / 2.0;
                }
                else {
                    leftPartEnd = x > y ? (x + xp) / 2.0 : (y + yp) / 2.0;
                }
            }
            return leftPartEnd;
        }
    }
};
var getLeftPartLength = function (len) {
    return Math.ceil(len / 2);
};
/* test case */
// console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
// console.log(findMedianSortedArrays([4, 20, 32, 50, 55, 61], [1, 15, 22, 30, 70]));
