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
var isCompleteTree = function(root) {
    let q = [root], prev = root;
    
    while(q.length){
        let cur = q.shift();
        
        if(cur !== null){
            if(prev === null) return false;
            q.push(cur.left);
            q.push(cur.right);
        };
        
        prev = cur;
    };
    
    return true;
};