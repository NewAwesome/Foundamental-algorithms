/**
 * 11. Container With Most Water
 *
 * Bruce Force
 * @param {number[]} height
 * @returns {number}
 */
function maxAreaBf(height) {
    let maxarea = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            maxarea = Math.max(maxarea, (j - i) * Math.min(height[i], height[j]))
        }
    }
    return maxarea;
}

/**
 *
 * Two pointer approach
 * @param {number[]} height
 * @returns {number}
 */
function maxArea(height) {

}

// Test case
console.log(maxAreaBf([1, 8, 6, 2, 5, 4, 8, 3, 7]));