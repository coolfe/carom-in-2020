function insertionSort(arr) {
  let len = arr.length;
  let preIndex, current;
  for (let i =1; i<len; i++) {
    preIndex = i -1;
    current = arr[i];
    while(preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex --;
    }
    arr[preIndex +1] = current;
  }
  return arr;
}

const data = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

console.log(insertionSort(data))