/*
 * @Description: 插入排序（二分查找法）
 * @Author: jiayufei
 * @Date: 2019-12-25 23:17:07
 * @LastEditors: jiayufei
 * @LastEditTime: 2021-04-12 10:38:20
 */
function binaryInsertSort(arr, n) {
  for (var i = 1; i < n; i++) {
    var low = 0,
      high = i - 1;
    // 在index 0~i-1 的有序排列中找出i元素应该在的位置。用二分法查找
    while (low <= high) {
      var mid = Math.floor((low + high) / 2);
      // 此处不包括===的情况。可以在重复元素的情况下将后来的元素i插入到前面与其重复的元素A之后，而无需额外多移动一次A
      if (arr[i] < arr[mid]) high = mid - 1;
      else low = mid + 1;
    }
    // while 结束后————low就是应该插入的位置
    // 统一后移元素 [low,i)
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
