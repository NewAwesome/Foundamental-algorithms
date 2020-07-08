type twoDimArray = Array<Array<number>>

const dpApproach: (row: number, col: number) => number = function (row, col) {
  if (row === 1 || col === 1) {
    return 1
  }
  // 1. define: dp[][]
  const dp: twoDimArray = new Array<Array<number>>(col)
  // 1. initialize: dp[][]
  for (let i = 0; i < col; i++) {
    dp[i] = new Array<number>(row)
    for (let j = 0; j < row; j++) {
      dp[i][j] = 1
    }
  }
  // console.log(dp)
  // 2. state transition
  for (let i = 1; i < col; i++) {
    for (let j = 1; j < row; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }
  return dp[col - 1][row - 1]
}

console.log(dpApproach(8, 3))

/* Optimizing */

const dpOptimized: (row: number, col: number) => number = (row, col) => {
  if (row === 1 || col === 1) {
    return 1
  }
  // 1. define upperLine[] and leftItem
  let upperLine: Array<number> = new Array<number>(row)
  for (let i = 0; i < row; i++) {
    upperLine[i] = 1
  }
  let leftItem: number = 1

  for (let i = 1; i < col; i++) {
    const tempArr: Array<number> = []
    tempArr[0] = 1
    for (let j = 1; j < row; j++) {
      const current = upperLine[i] + leftItem
      tempArr[i] = current
      leftItem = current
    }
    leftItem = 1
    upperLine = tempArr
  }
  return leftItem
}

console.log(dpOptimized(8, 3))
