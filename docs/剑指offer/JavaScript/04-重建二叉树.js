function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
function reConstructBinaryTree(pre, vin)
{
  // write code here
  if(pre.length===0 || vin.length===0) {
      return null
  }
  let binaryTree = new TreeNode(pre[0]);
  let pre_left = [], pre_right = [], vin_left = [], vin_right = [];
  let index = vin.indexOf(pre[0]);
  pre_left = pre.slice(1, index+1);
  pre_right = pre.slice(index+1);
  vin_left = vin.slice(0, index);
  vin_right = vin.slice(index+1);
  binaryTree.left = reConstructBinaryTree(pre_left, vin_left);
  binaryTree.right = reConstructBinaryTree(pre_right, vin_right);
  return binaryTree;
}
module.exports = {
  reConstructBinaryTree : reConstructBinaryTree
};
