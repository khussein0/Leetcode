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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let res = [];
    function dfs(node){
        if(res.length !== k){
            if(node.left) dfs(node.left);
            res.push(node.val);
            if(node.right) dfs(node.right);
        };
    };
    dfs(root);
    return res[k-1];
};