// binary heap

// BinaryTree = struct {
//   value: number,
//   left: BinaryTree | null
//   right: BinaryTree | null
// }
//1              3
//             /   \
//2         4         7
//        /   \     /   \
//4      8    10   14    9
//     /  \  /
//8   9   15 18

//               2i+1 2i+2
//                  ↓ ↓
// [3,4,7,8,10,14,9,9,15,18]
//        ↑
//        i === 3

// 2 ** n = 2 ** (n-1) + 2 ** (n-2) + ... + 2 ** 0

// 1 2 4 8 = 16 - 1
// 128 - 1 = 64 + 64 - 1

//1              4
//             /   \
//2         3         1
//        /   \     /   \
//4      2    7    2

const heapify = (i, arr, length) => {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let index = i;

  if (left < length && arr[left] < arr[index]) {
    index = left;
  }
  if (right < length && arr[right] < arr[index]) {
    index = right;
  }

  if (index !== i) {
    let tmp = arr[i];
    arr[i] = arr[index];
    arr[index] = tmp;
    heapify(index, arr, length);
  }
};

const arrForLog = [3, 20, 7, 10, 8, 14, 9, 9, 15, 18];
heapify(1, arrForLog);

//1              7                      3
//             /   \                  20 7
//2         4         15
//        /   \     /   \
//4     18    14   8     9
//     /  \   /
//8   3   10 9

const array = [7, 4, 15, 18, 14, 8, 9, 3, 10, 9];
heapSort(array);
console.log(array);

function heapSort(array) {
  const mid = Math.floor(array.length / 2 - 1);
  for (let i = mid; i >= 0; i--) {
    heapify(i, array, array.length);
  }

  let length = array.length;
  while (length > 0) {
    [array[0], array[length - 1]] = [array[length - 1], array[0]];
    heapify(0, array, length);
    length--;
  }
  return array;
}

// const arr = [5, 11999999923, 653, 13, 9];
// const sorted = [];
// arr.forEach((x) => setTimeout(() => sorted.push(x), x));

//1              4
//             /   \
//2         7         8
//        /   \     /   \
//4     10      9   15     9
//     /  \   /
//8  19   14

// 2 [
//   7, 4, 15,  3,  9,
//   8, 9, 18, 10, 14
// ]
// 1 [
//    7, 4,  8,  3,  9,
//   15, 9, 18, 10, 14
// ]
// 0 [
//    7, 3,  8,  4,  9,
//   15, 9, 18, 10, 14
// ]
// [
//    3, 7,  8,  4,  9,
//   15, 9, 18, 10, 14
// ]

// 3, 7,  8,  4,  9,
// 15, 9, 18, 10, 14
// ---------
//   3, 4,  8,  7,  9,
//  15, 9, 18, 10, 14
