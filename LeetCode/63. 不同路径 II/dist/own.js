var dpApproach = function (row, col) {
    if (row === 1 || col === 1) {
        return 1;
    }
    // 1. define: dp[][]
    var dp = new Array(col);
    // 1. initialize: dp[][]
    for (var i = 0; i < row; i++) {
        dp[i] = new Array(col);
        for (var j = 0; j < col; j++) {
            dp[i][j] = 1;
        }
    }
    // console.log(dp)
    // 2. state transition
    for (var i = 1; i < row; i++) {
        for (var j = 1; j < col; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[row - 1][col - 1];
};
console.log(dpApproach(8, 3));
/* Optimizing */
var dpOptimized = function (row, col) {
    if (row === 1 || col === 1) {
        return 1;
    }
    // 1. define upperLine[] and leftItem. 优化为只记录上一行与前一格的数据
    var upperLine = new Array(row);
    for (var i = 0; i < col; i++) {
        upperLine[i] = 1;
    }
    var leftItem = 1;
    for (var i = 1; i < row; i++) {
        var tempArr = [];
        tempArr[0] = 1;
        for (var j = 1; j < col; j++) {
            var current = upperLine[j] + leftItem;
            tempArr[j] = current;
            leftItem = current;
        }
        leftItem = 1;
        upperLine = tempArr;
    }
    return upperLine[col - 1];
};
console.log(dpOptimized(3, 8));
