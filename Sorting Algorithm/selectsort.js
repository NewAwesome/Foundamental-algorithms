function selectSort(arr, n) {
  for (var i = 0; i < n; i++) {
    var minpos = i; // save the minimum element's index
    for (var j = i + 1; j < n; j++) {
      if (arr[j] < arr[minpos]) minpos = j;
    }
    if (minpos != i) {
      arr[minpos] = [arr[i], arr[i] = arr[minpos]][0]; // swap a&b :  a = [b,b=a][0];
    }
  }
}
var arr = [17, 9, 23, 1, 5, 99];
selectSort(arr, arr.length);
console.log(arr);
