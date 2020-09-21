/**
 * 11. Container With Most Water
 *
 * Bruce Force
 * @param {number[]} height
 * @returns {number}
 */
function maxAreaBf(height) {
    let maxarea = 0
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            maxarea = Math.max(maxarea, (j - i) * Math.min(height[i], height[j]))
        }
    }
    return maxarea
}

/**
 *
 * Two pointer approach 
 * The intuition behind this approach is : 首尾指针向内夹 => 每次指针向内移动都应该移动较短的那条木板。若是移动长木板，由于水位取决于短板，底边缩短，那么面积必然缩小
 * @param {number[]} height
 * @returns {number}
 */
function maxArea(height) {
    let maxarea = 0
    let left = 0,
        right = height.length - 1
    while (left < right) {
        maxarea = Math.max(maxarea, (right - left) * Math.min(height[left], height[right]))
        height[left] < height[right] ? left++ : right--
    }
    return maxarea
}

// Test case
console.log(maxAreaBf([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));