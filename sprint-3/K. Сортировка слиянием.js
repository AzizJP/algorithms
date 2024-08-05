function merge_sort(arr, left, right) {
  if (right - left <= 1) {
    return;
  }

  const mid = Math.floor((left + right) / 2);

  merge_sort(arr, left, mid);
  merge_sort(arr, mid, right);

  merge(arr, left, mid, right);
}

function merge(arr, left, mid, right) {
  let leftArr = arr.slice(left, mid);
  let rightArr = arr.slice(mid, right);

  let i = 0,
    j = 0,
    k = left;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
    }
    k++;
  }

  while (i < leftArr.length) {
    arr[k] = leftArr[i];
    i++;
    k++;
  }

  while (j < rightArr.length) {
    arr[k] = rightArr[j];
    j++;
    k++;
  }
}

function test() {
  var a = [1, 4, 9, 2, 10, 11];
  var b = merge(a, 0, 3, 6);
  var expected = [1, 2, 4, 9, 10, 11];

  var c = [1, 4, 2, 10, 1, 2];
  merge_sort(c, 0, 6);
  expected = [1, 1, 2, 2, 4, 10];
}
