/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root) return true;
    return compare(root.left, root.right);
};

function compare(leftNode, rightNode){
    if((leftNode && !rightNode) || (!leftNode && rightNode) || (leftNode && rightNode && leftNode.val !== rightNode.val)) return false;
    if(leftNode && rightNode) return compare(leftNode.left, rightNode.right) && compare(leftNode.right, rightNode.left);
    return true;
};