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
var maxAncestorDiff = function(root) {
    function dfs(node, min, max){
        if(!node) return max - min;
        
        max = Math.max(max, node.val);
        min = Math.min(min, node.val);

        return Math.max(dfs(node.left, min, max), dfs(node.right, min, max));
    };

    return dfs(root, root.val, root.val);
};