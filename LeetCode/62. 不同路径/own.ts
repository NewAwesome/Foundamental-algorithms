const dp: (row: number, col: number) => number = function (
  row: number,
  col: number
) {
  // define: dp[][]
  const dp:Array<Array<number>> = new Array<Array<number>>(col)
  // initialize: dp[][]
  dp.forEach(item=>{
    item = new Array<number>(row)
    for (let i = 0; i < item.length; i++) {
      item[i] = 1
    }
  })
  console.log(dp)
  return 123;
};
dp(8,3)