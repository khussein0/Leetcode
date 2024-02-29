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
 * @return {boolean}
 */
var isEvenOddTree = function(root) {
    if(!root) return true;
    let q = [root], lvl = 0;
    
    while(q.length){
        let size = q.length, prev = (lvl % 2 === 0) ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER;
        
        for(let i = 0; i < size; i++){
            let cur = q.shift();
            if((lvl % 2 === 0 && (cur.val % 2 === 0 || cur.val <= prev)) || (lvl % 2 === 1 && (cur.val % 2 === 1 || cur.val >= prev))) return false;
            
            prev = cur.val;
            
            if(cur.left) q.push(cur.left);
            if(cur.right) q.push(cur.right);
        }
        
        lvl++;
    }
    
    return true;
};