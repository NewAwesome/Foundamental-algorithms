function binaryInsertSort(arr, n) {
  for (var i = 1; i < n; i++) {
    // binary search
    var low = 0,
      high = i - 1;
    while (low <= high) {
      var mid = Math.floor((low + high) / 2);
      if (arr[i] < arr[mid]) high = mid - 1;
      else low = mid + 1;
    }
    // 统一后移元素
    // 先保存arr[i]的值
    var insertingEle = arr[i];
    for (var j = i - 1; j >= low; j--) {
      arr[j + 1] = arr[j];
    }
    arr[low] = insertingEle;
  }
}

var arr = [17, 9, 23, 1, 5, 99];
binaryInsertSort(arr, arr.length);
console.log(arr);
