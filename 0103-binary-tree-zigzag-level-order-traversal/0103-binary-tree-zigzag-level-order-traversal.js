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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let res = [];
    
    function bfs(node, level){
        if(node === null) return;
        if(res[level] == null) res[level] = [];
        
        if(level % 2 === 0) res[level].push(node.val);
        else res[level].unshift(node.val);
        
        bfs(node.left, level + 1);
        bfs(node.right, level + 1);
    };
    
    bfs(root, 0);
    return res;
};