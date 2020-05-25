//      prev       node
//         ↓       ↓
// 3 ← 5 ← 4 ← 1   null
const reverse = (head) => {
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

// reverse(3 → 5 → 4 → 1 → null)
// 3 ← reverse(5 → 4 → 1 → null)
// 3 ← [null ← 5 ← 4 ← 1]

// null
// 1 → null
const reverseRec = (head) => {
  if (head === null || head.next === null) return head;

  const newHead = reverseRec(head.next);
  head.next.next = head;
  head.next = null;

  return newHead;
};

// print(list);
// const reversed = reverseRec(list);
// print(reversed);

function print(node) {
  const res = [];
  for (let curr = node; curr !== null; curr = curr.next) {
    res.push(curr.value);
  }
  console.log(res.join(" → "));
}
// Home work reverse 2 linked list

let tail = {
  value: 3,
  next: {
    value: 5,
    next: {
      value: 4,
      next: {
        value: 1,
        next: null,
      },
    },
  },
};

const l1 = {
  value: 10,
  next: {
    value: 12,
    next: {
      value: 45,
      next: tail,
    },
  },
};

const l2 = {
  value: 8,
  next: {
    value: 5,
    next: {
      value: 2,
      next: {
        value: 111,
        next: {
          value: 0,
          next: {
            value: 34,
            next: tail,
          },
        },
      },
    },
  },
};

// print(l1);
// print(l2);

function findNode(l1, l2) {
  // O(n×m)
  for (let p1 = l1; p1 !== null; p1 = p1.next) {
    for (let p2 = l2; p2 !== null; p2 = p2.next) {
      if (p1 === p2) {
        return p1;
      }
    }
  }
}

function findNodeLinear(l1, l2) {
  // O(n + m)
  let head1 = l1;
  let head2 = l2;
  let lenght1 = 0;
  let lenght2 = 0;

  while (head1) {
    head1 = head1.next;
    lenght1++;
  }
  while (head2) {
    head2 = head2.next;
    lenght2++;
  }

  let p1 = l1; // p1 длиннее p2
  let p2 = l2;

  if (lenght1 < lenght2) {
    [p1, p2] = [p2, p1];
  }

  for (let i = 0; i < Math.abs(lenght1 - lenght2); i++) {
    p1 = p1.next;
  }

  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1;
}

// console.log(">>", findNodeLinear(l2, l1) === tail);

// [7]                  10 → 12 → 45
//                                  \
// [10]   8 → 5 →  2 → 111 → 0 → 34 → 3 → 5 → 4 → 1

//                         -----------------
//                         ↓               ↑
// 8 → 5 →  2 → 111 → 0 → 34 → 3 → 5 → 4 → 1

const l5 = {
  value: 3,
  next: {
    value: 4,
    next: {
      value: 4,
      next: {
        value: 1,
        next: null,
      },
    },
  },
};

// l5.next.next.next.next  = l5;

const l6 = {
  value: 8,
  next: {
    value: 5,
    next: {
      value: 2,
      next: {
        value: 111,
        next: {
          value: 0,
          next: {
            value: 34,
            next: l5,
          },
        },
      },
    },
  },
};

const hasCircular = (head) => {
  let p1 = head;
  let p2 = head;
  while (p2) {
    if (!p2.next) {
      return false;
    }
    p1 = p1.next;
    p2 = p2.next.next;
    if (p1 === p2) {
      return true;
    }
  }
  return false;
};

// console.log(hasCircular(l6));
