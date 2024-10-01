if (process.env.REMOTE_JUDGE !== "true") {
  class CNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
}

function solution(root) {
  function isMirror(left, right) {
    if (left === null && right === null) {
      return true;
    }
    if (left === null || right === null) {
      return false;
    }

    return (
      left.value === right.value &&
      isMirror(left.left, right.right) &&
      isMirror(left.right, right.left)
    );
  }

  return root === null || isMirror(root.left, root.right);
}

function test() {
  var node1 = new CNode(3, null, null);
  var node2 = new CNode(4, null, null);
  var node3 = new CNode(4, null, null);
  var node4 = new CNode(3, null, null);
  var node5 = new CNode(2, node1, node2);
  var node6 = new CNode(2, node3, node4);
  var node7 = new CNode(1, node5, node6);
  console.assert(solution(node7));
}
