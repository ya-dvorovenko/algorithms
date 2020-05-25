// let a = [];
// a = 0x387f7a7f7
// *a → 0x387f7a7f7
// *(a+1) → 0x387f7a7fb
// *(a+2)

// *(a+5) ← a[5] 5[a] → *(5+a)

// Node := {
//   value: number;
//   next: *Node | null
// }

// List := *Node

// 3 → 5 → 4 → 1 → null

// let list = {
//   value: 3,
//   next: {
//     value: 5,
//     next: {
//       value: 4,
//       next: {
//         value: 1,
//         next: null,
//       },
//     },
//   },
// };

// let list2 = {
//   value: 10,
//   next: list1,
// }

// list = list2;

// const iterateLLFromEnd = (node) => {
//   if (!node) {
//     return;
//   }
//   iterateLLFromEnd(node.next);
//   console.log(node.value);
// };

// const iterateLL = (node) => {
//   if (!node) {
//     return;
//   }
//   console.log(node.value);
//   iterateLL(node.next);
// };

// iterateLLFromEnd(list);

class List {
  constructor() {
    this.list = null;
  }
  add(value) {
    this.list = {
      value,
      next: this.list,
    };
  }
  // this.list → 4→3→2→1→null
  // list2 → 7→6→5→null
  // l1.addList(list2) → 4→3→2→1→7→6→5→null
  addList(list2) {
    if (!this.list) {
      this.list = list2.list;
      return;
    }
    let curr;
    for (curr = this.list; curr.next !== null; curr = curr.next);
    curr.next = list2.list;
  }
  remove(index) {
    if (index === 0) {
      this.list = this.list.next;
      return;
    }
    let tmp = this.list;
    for (let i = 0; i < index - 1; i++) {
      if (tmp === null) {
        throw new Error("invalid index");
      }
      tmp = tmp.next;
    }
    tmp.next = tmp.next.next;
  }
  print() {
    const values = [];
    for (let curr = this.list; curr !== null; curr = curr.next) {
      values.push(curr.value);
    }
    console.log(values.join(" → "));
  }

  static reverseList(list) {
    let prev;
    let tmp;
    let node = list;
    while (node) {
      tmp = node.next;
      node.next = prev;
      prev = node;
      node = tmp;
    }
    return prev;
  }

  printReverse() {
    // Solution 1
    // const values = [];
    // for (let curr = this.list; curr !== null; curr = curr.next) {
    //   values.push(curr.value);
    // }
    // values.reverse();
    // console.log(values.join(" → "));
    // Solution 2
    // const values = [];
    // for (let curr = this.list; curr !== null; curr = curr.next) {
    //   values.unshift(curr.value);
    // }
    // console.log(values.join(" → "));
    // Solution 3
    const reversedList = List.reverseList(this.list);
    const values = [];
    for (let curr = reversedList; curr !== undefined; curr = curr.next) {
      values.push(curr.value);
    }
    console.log(values.join(" → "));
  }

  reverse(list) {
    return List.reverseList(list);
  }

  [Symbol.iterator]() {
    let curr = this.list;
    return {
      next() {
        if (curr === null) {
          return {
            done: true,
          };
        }

        const { value } = curr;
        curr = curr.next;

        return {
          done: false,
          value,
        };
      },
    };
  }
}

const l1 = new List();

l1.add(61);
l1.add(2);
l1.add(33);
l1.add(12);
l1.add(76);
l1.add(46);

l1.print();

for (const val of l1) {
  console.log(val);
}
