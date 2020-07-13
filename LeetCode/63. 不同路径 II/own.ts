type twoDimArray = Array<Array<number>>

const dpApproach: (row: number, col: number) => number = function (row, col) {
  if (row === 1 || col === 1) {
    return 1
  }
  // 1. define: dp[][]
  const dp: twoDimArray = new Array<Array<number>>(col)
  // 1. initialize: dp[][]
  for (let i = 0; i < row; i++) {
    dp[i] = new Array<number>(col)
    for (let j = 0; j < col; j++) {
      dp[i][j] = 1
    }
  }
  // console.log(dp)
  // 2. state transition
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }
  return dp[row - 1][col - 1]
}

console.log(dpApproach(8, 3))

/* Optimizing */

const dpOptimized: (row: number, col: number) => number = (row, col) => {
  if (row === 1 || col === 1) {
    return 1
  }
  // 1. define upperLine[] and leftItem. 优化为只记录上一行与前一格的数据
  let upperLine: Array<number> = new Array<number>(row)
  for (let i = 0; i < col; i++) {
    upperLine[i] = 1
  }
  let leftItem: number = 1

  for (let i = 1; i < row; i++) {
    const tempArr: Array<number> = []
    tempArr[0] = 1
    for (let j = 1; j < col; j++) {
      const current = upperLine[j] + leftItem
      tempArr[j] = current
      leftItem = current
    }
    leftItem = 1
    upperLine = tempArr
  }
  return upperLine[col - 1]
}

console.log(dpOptimized(3, 8))
