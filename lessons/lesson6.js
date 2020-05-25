const node1 = {
  value: true,
  id: 1,
};

const node2 = {
  value: false,
  id: 2,
};

const node3 = {
  value: true,
  id: 3,
};

const node4 = {
  value: false,
  id: 4,
};

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node1;

node1.prev = node4;
node2.prev = node1;
node3.prev = node2;
node4.prev = node3;

function countNodes(head) {
  let counter = 1;
  while (true) {
    head.value = true;
    for (let i = 0; i < counter; i++) {
      head = head.next;
    }
    head.value = false;
    for (let i = 0; i < counter; i++) {
      head = head.prev;
    }
    if (!head.value) {
      return counter;
    }
    counter++;
  }
}

console.log(countNodes(node1)); // 4

class Node {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class List {
  constructor() {
    this.list = null;
    this.head = null;
    this.tail = null;
  }
  add(value) {
    let nodeForAdd = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }
    this.tail.next = nodeForAdd;
    nodeForAdd.prev = this.tail;
    this.tails = nodeForAdd;
  }
  remove(value) {
    if (!this.head) {
      return null;
    }
    let nodeForRemove = null;
    let currentPointer = this.head;
    while (currentPointer) {
      nodeForRemove = currentPointer;
      // Is it our node?
      if (currentPointer.value === value) {
        // Remove head?
        if (nodeForRemove === this.head) {
          this.head = this.head.next;
          this.head.prev = null;
        }
        // Remove tail?
        else if (nodeForRemove === this.tail) {
          this.tail = this.tails.prev;
          this.tail.next = null;
        } else {
          const prevNode = nodeForRemove.prev;
          const nextNode = nodeForRemove.next;
          prevNode.next = nextNode;
          nextNode.previous = prevNode;
        }
      }
    }
    return nodeForRemove;
  }
}
