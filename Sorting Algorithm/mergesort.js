function mergeSort(arr, low, high) {
  if (low < high) {
    var mid = parseInt((low + high) / 2); // JS is different from JAVA, it's '/' won't automatically parse float to int .
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);
  }
}

var tempArr = [];

function merge(arr, low, mid, high) {
  // The minimum divide contains two element, so the tempArray should be copied in two elements at least
  for (var k = low; k <= high; k++) tempArr[k] = arr[k];
  // This loop's function is: merge two sorted array to one sorted array, which needs to compare them successively.
  for (var i = low, j = mid + 1, k = i; i <= mid && j <= high; k++) {
    if (tempArr[i] <= tempArr[j]) arr[k] = tempArr[i++];
    else arr[k] = tempArr[j++];
  }
  while (i <= mid) arr[k++] = tempArr[i++];
  while (j <= high) arr[k++] = tempArr[j++];
}
var arr = [17, 9, 23, 1, 5, 99];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
