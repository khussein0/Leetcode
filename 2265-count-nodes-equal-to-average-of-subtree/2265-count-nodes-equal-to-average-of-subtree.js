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
var averageOfSubtree = function(root) {
    let res = 0;
    
    function dfs(node){
        if(!node) return [0, 0];
        
        const [leftSum, leftCount] = dfs(node.left), [rightSum, rightCount] = dfs(node.right);
        const curCount = leftCount + rightCount + 1, curSum = leftSum + rightSum + node.val;
        
        if(Math.floor(curSum / curCount) === node.val) res++;
        
        return [curSum, curCount];
    };
    
    dfs(root);
    return res;
};