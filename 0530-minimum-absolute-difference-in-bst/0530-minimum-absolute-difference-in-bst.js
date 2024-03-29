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
var getMinimumDifference = function(root) {
    let res = Infinity, arr = [];
    
    function dfs(node){
        if(!node) return;
        dfs(node.left);
        arr.push(node.val);
        dfs(node.right);
    };
    
    dfs(root);
    
    for(let i = 1; i < arr.length; i++) res = Math.min(res, Math.abs(arr[i] - arr[i - 1]));
    
    return res;
};