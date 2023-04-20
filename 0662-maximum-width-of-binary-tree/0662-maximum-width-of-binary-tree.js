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
var widthOfBinaryTree = function(root) {
    let lvlPos = [0], max = 0;
    
    function dfs(node, lvl, pos){
        if(!node) return;
        if(lvlPos[lvl] === undefined) lvlPos.push(pos);
        
        let diff = pos - lvlPos[lvl];
        max = Math.max(max, diff + 1);
        
        dfs(node.left, lvl + 1, diff*2);
        dfs(node.right, lvl + 1, diff*2 + 1);
    };
    
    dfs(root, 0, 0);
    return max;
};