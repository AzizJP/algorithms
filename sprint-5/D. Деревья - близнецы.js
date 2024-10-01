if (process.env.REMOTE_JUDGE !== "true") {
  class CNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
}

function solution(root1, root2) {
  function areIdentical(node1, node2) {
    if (node1 === null && node2 === null) {
      return true;
    }
    if (node1 === null || node2 === null) {
      return false;
    }

    return (
      node1.value === node2.value &&
      areIdentical(node1.left, node2.left) &&
      areIdentical(node1.right, node2.right)
    );
  }

  return areIdentical(root1, root2);
}

function test() {
  var node1 = new CNode(1, null, null);
  var node2 = new CNode(2, null, null);
  var node3 = new CNode(3, node1, node2);

  var node4 = new CNode(1, null, null);
  var node5 = new CNode(2, null, null);
  var node6 = new CNode(3, node4, node5);

  console.assert(solution(node3, node6));
}
