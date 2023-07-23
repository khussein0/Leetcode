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
var allPossibleFBT = function(n) {
    if(n % 2 === 0) return [];
    const dp = new Array(n+1).fill(null).map((_) => []);
    
    function rec(node){
        if(dp[node].length > 0) return dp[node];
        if(node === 1) return [new TreeNode(0)];
        
        const tree = [];
        
        for(let i = 1; i < node - 1; i += 2){
            let l = rec(i), r = rec(node - 1 - i);
            
            l.forEach((lt) => {
                r.forEach((rt) => {
                    tree.push(new TreeNode(0, lt, rt));
                });
            });
        };
        
        dp[node] = tree;
        return dp[node];
    };
    
    return rec(n);
};