function bubbleSort(arr, n) {
  for (var i = 0; i < n; i++) {
    var flag = false;
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
