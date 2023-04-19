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
var longestZigZag = function(root, side, res) {
    if(!root) return res;
    let left = longestZigZag(root.left, 0, side ? res + 1 : 0),
        right = longestZigZag(root.right, 1, side < 1 ? res + 1 : 0);
    return Math.max(left, right);
};