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
  let maxValue = 0;

  const findMaxValue = (head) => {
    if (maxValue < head.value) maxValue = head.value;

    if (head.left) findMaxValue(head.left);
    if (head.right) findMaxValue(head.right);
  };

  findMaxValue(root);

  return maxValue;
}

function test() {
  var node1 = new CNode(1);
  var node2 = new CNode(-5);
  var node3 = new CNode(3);
  node3.left = node1;
  node3.right = node2;
  var node4 = new CNode(2);
  node4.left = node3;
  console.assert(solution(node4) === 3);
}
