if (process.env.REMOTE_JUDGE !== "true") {
  class CNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
}

function solution(root) {
  let leftHeads = 0;
  let rightHeads = 0;

  const findMaxValue = (head) => {
    if (head.left) {
      findMaxValue(head.left);
    }
    if (head.right) {
      findMaxValue(head.right);
    }
  };

  findMaxValue(root.left);
  findMaxValue(root.right);

  const diffs = Math.abs(leftHeads - rightHeads);
  if (diffs === 0 || diffs === 1) return "True";
  return "Fasle";
}

function test() {
  var node1 = new CNode(1);
  var node2 = new CNode(-5);
  var node3 = new CNode(3);
  node3.left = node1;
  node3.right = node2;
  var node4 = new CNode(10);
  var node5 = new CNode(2);
  node5.left = node3;
  node5.right = node4;
  console.assert(solution(node5));
}
