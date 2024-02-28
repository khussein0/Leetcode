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
var findBottomLeftValue = function(root) {
    const q = [root];
    let res;
    
    while(q.length){
        const cur = q.shift();
        res = cur.val;
        if(cur.right) q.push(cur.right);
        if(cur.left) q.push(cur.left);
    }
    
    return res;
};