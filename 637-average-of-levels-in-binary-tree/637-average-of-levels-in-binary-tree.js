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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let res = [], q = [root];
    while(q[0]){
      let count = 0, len = q.length;
        for(let i = 0; i < len; i++){
            let cur = q.shift();
            count += cur.val;
            if(cur.left) q.push(cur.left);
            if(cur.right) q.push(cur.right);
        };
        res.push(count / len);
    };
    return res;
};