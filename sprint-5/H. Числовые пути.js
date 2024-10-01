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
  function dfs(node, currentNumber) {
    if (node === null) {
      return 0;
    }

    currentNumber = currentNumber * 10 + node.value;

    if (node.left === null && node.right === null) {
      return currentNumber;
    }

    return dfs(node.left, currentNumber) + dfs(node.right, currentNumber);
  }

  return dfs(root, 0);
}

function test() {
  var node1 = new CNode(2, null, null);
  var node2 = new CNode(1, null, null);
  var node3 = new CNode(3, node1, node2);
  var node4 = new CNode(2, null, null);
  var node5 = new CNode(1, node4, node3);
  console.assert(solution(node5) === 275);
}
