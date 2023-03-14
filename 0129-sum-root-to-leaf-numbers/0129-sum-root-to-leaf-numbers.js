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
var sumNumbers = function(root) {    
    function dfs(node, res){
        if(!node) return null;
        res += node.val;
        if(!node.left && !node.right) return +res;
        return dfs(node.left, res) + dfs(node.right, res);
    };
    
    return dfs(root, '');
};