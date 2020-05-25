// k списков длины n → O((k*n) ** 2)
// merge 2 lists → O(n+m)
// O(n + n) → 2n
// O(2n + n) → 3n
// ...
// O((k-1)n + n) → kn
// (1 + 2 + ... + (k-1) + k) × n = O(k * k × n)
//                                 O(k * log₂k × n)
// (1 + k) × k / 2

// k × n → O(n × k × log(n × k))
// k × n → O(n × k × log(n × k))

// O(n × k × log₂k)

const l1 = {
  value: 1,
  next: {
    value: 4,
    next: {
      value: 9,
      next: null,
    },
  },
};

const l2 = {
  value: 3,
  next: {
    value: 5,
    next: {
      value: 10,
      next: null,
    },
  },
};

const l3 = {
  value: 2,
  next: {
    value: 3,
    next: {
      value: 10,
      next: {
        value: 11,
        next: null,
      },
    },
  },
};

const l4 = null;

class Heap {
  constructor(lists) {
    this.lists = lists.filter(Boolean);
    this.build(this.lists);
  }

  build() {
    const middle = Math.floor(this.lists.length / 2 - 1);
    for (let i = middle; i >= 0; i--) {
      this.heapify(i);
    }
  }

  heapify(i) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let index = i;

    if (
      left < this.lists.length &&
      this.lists[left].value < this.lists[index].value
    ) {
      index = left;
    }

    if (
      right < this.lists.length &&
      this.lists[right].value < this.lists[index].value
    ) {
      index = right;
    }

    if (index === i) return;

    [this.lists[i], this.lists[index]] = [this.lists[index], this.lists[i]];
    this.heapify(index);
  }

  isEmpty() {
    return this.lists.length === 0;
  }

  getHead() {
    let node = this.lists[0];

    if (this.lists.length === 1 && node.next === null) {
      this.lists = [];
      return node;
    }

    if (node.next !== null) {
      this.lists[0] = node.next;
    } else {
      this.lists[0] = this.lists.pop();
    }
    this.heapify(0);
    return node;
  }

  // add(node) {
  //   this.lists(node);
  //   this.heapifyTop(this.lists.length - 1);
  // }
}

// 1→4→9
// 3→5→10
// 2→3→10→11 ->14 -> 20

//1              3
//             /   \
//2         4         8
//        /   \     /   \
//4     10    7    9     18
//     /  \  /
//8   15  14 9

// const arr = [
//   { value: 4 },
//   { value: 15 },
//   { value: 9 },
//   { value: 14 },
//   { value: 7 },
//   { value: 8 },
//   { value: 18 },
//   { value: 10 },
//   { value: 3 },
//   { value: 9 },
// ];
// const heap = new Heap(arr);
// heap.build();
// console.log(heap.lists);

function mergeLists(lists) {
  let result = null;
  const heap = new Heap(lists);

  while (!heap.isEmpty()) {
    // O(n × k)
    const { value } = heap.getHead(); // O(log₂k)
    result = {
      value,
      next: result,
    };
  }
  // O(n × k × log₂k)
  // O(n × k)

  result = reverseList(result);

  return result;
}

const reverseList = (head) => {
  let node = head;
  let prev = null;
  while (node) {
    let tmp = node.next;
    node.next = prev;
    prev = node;
    node = tmp;
  }
  return prev;
};

const printList = (list) => {
  const accum = [];
  for (let i = list; i !== null; i = i.next) {
    accum.push(i.value);
  }
  console.log(accum.join("→"));
};

const l = printList(mergeLists([l1, l2, l3, l4]));
