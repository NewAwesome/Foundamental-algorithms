/*
 * @Description: 
 * @Author: jiayufei
 * @Date: 2021-02-01 18:03:46
 * @LastEditors: jiayufei
 * @LastEditTime: 2021-04-12 10:43:56
 */
function bubbleSort(arr, n) {
  for (var i = 0; i < n; i++) {
    var flag = false;
    // 将 [i, n-1] 中的最小值移动到i位置 (从后向前依次比较两个元素，每次都将较小的bubble向前移动)
    // flag 假如某轮冒泡中没有发生元素移动，则说明已经有序，直接输出结果
    for (var j = n - 1; j > i; j--) {
      if (arr[j - 1] > arr[j]) {
        var temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        flag = true;
      }
    }
    if (flag == false) return;
  }
}


var arr = [17, 9, 23, 1, 5, 99];
bubbleSort(arr, arr.length);
console.log(arr);
