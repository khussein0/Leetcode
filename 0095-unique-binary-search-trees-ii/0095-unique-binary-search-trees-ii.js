/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if(n === 0) return [];
    
    function backtrack(s, e){
        if(s > e) return [null];
        const trees = [];
        for(let i = s; i <= e; i++){
            const leftT = backtrack(s, i - 1);
            const rightT = backtrack(i + 1, e);
            
            for(const l of leftT){
                for(const r of rightT){
                    const cur = new TreeNode(i);
                    cur.left = l;
                    cur.right = r;
                    trees.push(cur);
                };
            };
        };
        return trees;
    };
    
    return backtrack(1, n);
};