/**
 * @var divisor:每个桶的范围/除数
 * @var bukNum:桶的数量
 * @var buk:数组，表示桶
 * @function insert-sort:向桶内的数组插入多个数据时使用
 * @author:20190408————yf
 * 桶数量自定义，当桶的数量等于待排序数组Length时，该排序时间复杂度最小空间复杂度最大。
 */
function bucketSort(arr, n) {
  var buk = [],
    rs = [],
    max = arr[0],
    min = arr[0],
    bukNum = 5;
  // 初始化max和min，分别为待排序数组中的最大，最小值
  for (var i = 0; i < n; i++) {
    max = arr[i] > max ? arr[i] : max;
    min = arr[i] < min ? arr[i] : min;
    // 同时初始化buk数组内的数组
    buk[i] = [];
  }
  var divisor = (max - min + 1) / bukNum; // 每个桶中存放的数字跨度
  for (var i = 0; i < n; i++) {
    var index = Math.floor((arr[i] - min) / divisor); // arr[i]要进入的桶的index
    insert(buk[index], arr[i]);
  }
  // 存入结果数组rs中
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < buk[i].length; j++) {
      rs.push(buk[i][j]);
    }
  }
  return rs;
}
// 用直接插入排序处理
function insert(arr, value) {
  arr.push(value);
  for (var i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > arr[i + 1]) arr[i] = [arr[i + 1], arr[i + 1] = arr[i]][0];
    else break;
  }
}
var arr = [17, 9, 23, 1, 5, 99];
arr = bucketSort(arr, arr.length);
console.log(arr);
