const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
function Node(value) {
  const element = {};
  element.value = value;
  element.next = null;
  return element;
}

class Queue {
  constructor() {
    this.obj = {};
    this.obj.value = null;
    this.obj.next = null;
  }

  getUnderlyingList() {
    return this.obj;
  }

  enqueue(value) {
    const node = Node(value);
    let current = this.obj;

    if (current.value === null) {
      current.value = node.value;
      current.next = node.next;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  dequeue() {
    const deleted = this.obj.value;
    this.obj = this.obj.next;
    return deleted;
  }
}

module.exports = {
  Queue,
};
