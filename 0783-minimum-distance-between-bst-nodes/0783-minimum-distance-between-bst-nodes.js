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
var minDiffInBST = function(root) {
    let arr = [], res = Infinity;
    
    function dfs(root){
        if(!root) return;
        dfs(root.left);
        arr.push(root.val);
        dfs(root.right);
    };
    
    dfs(root);
    
    for(let i = 1; i < arr.length; i++){
        res = Math.min(Math.abs(arr[i] - arr[i - 1]), res);
    };
    
    return res;
};