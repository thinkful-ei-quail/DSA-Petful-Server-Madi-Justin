class _Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
  }

  enqueue(data) {
    const node = new _Node(data)
    if(this.first === null) {
      this.first = node
    }
    if(this.last) {
      this.last.next = node
    }
    this.last = node
  }

  dequeue() {
    if(this.first === null) {
      return 
    }

    const node = this.first

    if(this.last === node) {
      this.last = null
    }

    this.first = this.first.next

    return node.value
  }

  show() {
    if(this.first === null) {
      return 
    }

    return this.first.value
  }

  all() {
    const allPets = []
    let node = this.first
    while(node) {
      allPets.push(node.value)
      node = node.next
    }

    return allPets
  
  }
}

module.exports = Queue
