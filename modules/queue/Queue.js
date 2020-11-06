class _Node {
  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }

  enqueue(data) {
    const node = new _Node(data)

    if (this.first === null) {
      this.first = node
    }

    if(this.last) {
      this.last.next = node
    }

    this.length = this.length + 1
    this.last = node
  }

  dequeue() {
    if (this.first === null) {
      return
    }
    
    const node = this.first
    this.first = this.first.next

    if (node === this.last) {
      this.last = null
    }

    this.length = this.length - 1
    return node.data
  }

  show() {
    if (this.first === null) {
      return
    }

    return this.first.data
  }

  all() {
    if (this.first === null) {
      return
    }

    let node = this.first
    let resultsArr = []

    while (node.next) {
      resultsArr.push(node.data)
      node = node.next
    }

    resultsArr.push(node.data)
    return resultsArr
  }
}

module.exports = Queue
