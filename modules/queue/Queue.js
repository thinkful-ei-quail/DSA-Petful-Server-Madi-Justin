class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(data) {
    const node = new _Node(data);
    
    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }

    this.last = node;  
    this.length += 1;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }
    this.length -= 1;
    return node.value;
  }
  show() {
    // Return the next item in the queue.
  }

  all() {
    // Return all items in the queue.
  }
}

module.exports = Queue
