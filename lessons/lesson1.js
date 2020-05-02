const divisorsSum = (value) => {
  // O(n)
  let sum = 0;
  for (let i = 1; i < value; i++) {
    if (value % i === 0) {
      sum += i;
    }
  }
  return sum;
};

const divisorsSumQuick = (value) => {
  // O(sqrt(n))
  let sum = 0;
  let i;
  for (i = 2; i ** 2 < value; i++) {
    if (value % i === 0) {
      sum += i;
      sum += value / i;
    }
  }
  if (i ** 2 === value) {
    sum += i;
  }
  return sum + 1;
};

// ищет совершенные числа среди чисел от 1 до n включительно
const findPerfectNumbers = (n) => {
  // O(n²)
  const arr = [];
  for (let i = 1; i <= n; i++) {
    if (divisorsSumQuick(i) === i) {
      arr.push(i);
    }
  }
  return arr;
};

const findPerfectNumbersConstant = (n) => {
  const arr = [6, 28, 496, 8128, 33550336, 8689869056];
  return arr.filter((x) => x <= n);
};

//  n     op        O(n²)      op      (n×sqrt(n))
// 1024   1e6       0.013s    3.2e4      0.011s
// 1e4    1e8       0.258s    1e6        0.018s
// 4e4    1.6e9     3.792s    8e6        0.052s
// 9e4    81e8      19.166s   27e6       0.133s
// 1e6    1e12       ...      1e9        4.282s
// 1e10   1e20      190k y    1e15       1.9 y

const now = new Date();
console.log(findPerfectNumbers(1e6));
console.log(`${(new Date() - now) / 1000}s`);
