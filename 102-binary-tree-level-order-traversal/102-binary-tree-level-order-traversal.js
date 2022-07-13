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
var levelOrder = function(root) {
    if(!root) return [];
    
    let queue = [root], res = [];
    
    while(queue.length > 0){
        let arr = [], len = queue.length;
        for(let i = 0; i < len; i++){
            let curr = queue.shift();
            arr.push(curr.val);
            if(curr.left) queue.push(curr.left);
            if(curr.right) queue.push(curr.right);
        }
        res.push(arr);
    }
    
    return res;
};