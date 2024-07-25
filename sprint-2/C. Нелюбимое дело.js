if (process.env.REMOTE_JUDGE !== "true") {
  class Node {
    constructor(value = null, next = null) {
      this.value = value;
      this.next = next;
    }
  }
}

function solution(node, idx) {
  if (idx === 0) {
    return node.next;
  }

  let current = node;
  let previous = null;
  let currentIndex = 0;

  while (current) {
    if (currentIndex === idx) {
      previous.next = current.next;
      break;
    }
    previous = current;
    current = current.next;
    currentIndex++;
  }

  return node;
}

function test() {
  var node3 = new Node("node3");
  var node2 = new Node("node2", node3);
  var node1 = new Node("node1", node2);
  var node0 = new Node("node0", node1);
  var newHead = solution(node0, 2);
  // result is node0 -> node2 -> node3
}
