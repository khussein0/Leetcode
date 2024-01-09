/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    function dfs(node, stack = []){
        if(!node) return;
        if(!node.left && !node.right) stack.push(node.val);
        dfs(node.left, stack);
        dfs(node.right, stack);
        return stack;
    }
    
    return dfs(root1).join('-') === dfs(root2).join('-');
};