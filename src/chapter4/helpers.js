'use strict';

class TreeNode {
  constructor(value) {
    this.val = value;
    this.parent = this.left = this.right = null;
  }
}

export class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    let node = new TreeNode(value);
    if (!this.root) {
      this.root = node;
    }
    else {
      let n = this.root,
        branch;
      while (n) {
        branch = value < n.val ? 'left' : 'right';
        if (!n[branch]) {
          break;
        }
        n = n[branch];
      }
      node.parent = n;
      n[branch] = node;
    }
  }
}

class LinkedListNode {
  constructor(value, next) {
    this.val = value;
    this.next = next || null;
  }
}

export class LinkedList {
  constructor() {
    this.head = this.tail = null;
  }

  prepend(value) {
  }

  append(value) {
  }

  toArray() {
  }
}

function findDepth(cache, node, depth) {
}

export function isBalanced(tree) {
}
