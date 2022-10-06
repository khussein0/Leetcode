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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if(!root) return !subRoot;
    return identical(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

function identical(root, sub){
    if(!root || !sub) return !root && !sub;
    if(root.val !== sub.val) return false;
    return identical(root.left, sub.left) && identical(root.right, sub.right);
};