function partition(arr, low, high) {
  var pivot = arr[low];
  while (low < high) {
    while (low < high && arr[high] >= pivot) high--;
    arr[low] = arr[high];
    while (low < high && arr[low] < pivot) low++;
    arr[high] = arr[low];
  }
  arr[low] = pivot;
  return low;
}
var arr = [17, 9, 23, 1, 5, 99];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
