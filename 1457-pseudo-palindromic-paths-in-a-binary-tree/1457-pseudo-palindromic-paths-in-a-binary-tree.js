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
 * @return {number}
 */
var pseudoPalindromicPaths  = function(root, bit = 0) {
    if(!root) return 0;
    bit ^= 1 << root.val;
    if(!root.left && !root.right) return (bit&(bit - 1)) > 0 ? 0 : 1;
    return pseudoPalindromicPaths(root.left, bit) + pseudoPalindromicPaths(root.right, bit);
};