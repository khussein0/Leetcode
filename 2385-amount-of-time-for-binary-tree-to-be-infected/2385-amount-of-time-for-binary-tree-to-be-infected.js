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
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function(root, start) {
    let res = 0;
    
    function dfs(node, st){
        if(!node) return 0;
        let left = dfs(node.left, st),
            right = dfs(node.right, st);
        
        if(node.val === st){
            res = Math.max(left, right);
            return -1;
        }else if(left >= 0 && right >= 0) return Math.max(left, right) + 1;
        else{
            res = Math.max(res, Math.abs(left - right));
            return Math.min(left, right) - 1;
        };
    };
    
    dfs(root, start);
    return res;
};