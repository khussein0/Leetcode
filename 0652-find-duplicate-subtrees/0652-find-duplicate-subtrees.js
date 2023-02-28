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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    let map = new Map(), res = [];
    
    function dfs(node, map, res){
        if(!node) return;
        let sub = `${node.val}.${dfs(node.left,map,res)}.${dfs(node.right, map,res)}`;
        map.set(sub, (map.get(sub) || 0) + 1);
        if(map.get(sub) === 2) res.push(node);
        return sub;
    };
    
    dfs(root, map, res);
    return res;
};