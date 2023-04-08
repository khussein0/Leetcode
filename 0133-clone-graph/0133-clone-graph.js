/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    const map = {};
    
    function dfs(n){
        if(!n) return;
        if(!map[n.val]){
            map[n.val] = new Node(n.val);
            map[n.val].neighbors = n.neighbors.map(dfs);
        };
        return map[n.val];
    };
    
    return dfs(node);
};