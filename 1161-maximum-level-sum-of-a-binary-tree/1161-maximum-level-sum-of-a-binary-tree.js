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
var maxLevelSum = function(root) {
    const sums = [-Infinity];
    
    function dfs(node, lvl){
        if(!node) return;
        if(sums[lvl] === undefined) sums.push(node.val);
        else sums[lvl] += node.val;
        
        dfs(node.left, lvl + 1);
        dfs(node.right, lvl + 1);
    };
    
    dfs(root, 1)
    
    return sums.indexOf(Math.max(...sums));
};