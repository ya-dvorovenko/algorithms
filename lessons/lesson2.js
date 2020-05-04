const selectionSort = (arr) => {
  for (let start = 0; start < arr.length; start++) {
    let minPosition = start;
    for (let i = start + 1; i < arr.length; i++) {
      if (arr[minPosition] > arr[i]) {
        minPosition = i;
      }
    }
    let tempValue = arr[start];
    arr[start] = arr[minPosition];
    arr[minPosition] = tempValue;
  }
};

const bubbleSort = (arr) => {
  for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        let maxValue = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = maxValue;
      }
    }
  }
};

const mergeArrays = (arr1, arr2) => {
  // O(arr1.length + arr2.length)
  const newArray = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      newArray.push(arr1[p1]);
      p1 += 1;
    } else {
      newArray.push(arr2[p2]);
      p2 += 1;
    }
  }
  if (p1 === arr1.length) {
    while (p2 < arr2.length) {
      newArray.push(arr2[p2]);
      p2 += 1;
    }
  } else {
    while (p1 < arr1.length) {
      newArray.push(arr1[p1]);
      p1 += 1;
    }
  }
  return newArray;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const arr1 = arr.slice(0, mid);
  const arr2 = arr.slice(mid);

  return mergeArrays(mergeSort(arr1), mergeSort(arr2));
};

const length = 10000000;
const arr = Array.from({ length }, (_, i) => length - i);

const now = new Date();
mergeSort(arr);
console.log(`${(new Date() - now) / 1000}s`);

//              SS       BS        MS
//     1000   → 0.019s   0.005s  0.014s
//    10000   → 0.082s   0.121s  0.011s
//   100000   → 7.734s  11.339s  0.043s
//  1000000   → 12m              0.366s
// 10000000   → 20h              4.756s

// let a = 5;
// let b = 8;

// a = a + b; // 13
// b = a - b; // 5
// a = a - b; // 8

// console.log({ a, b });
