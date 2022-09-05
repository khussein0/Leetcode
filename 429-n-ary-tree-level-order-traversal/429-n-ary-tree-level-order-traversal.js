/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = [], q = [root];
    while(q[0]){
        let arr = [], len = q.length;
        for(let i = 0; i < len; i++){
            let cur = q.shift();
            arr.push(cur.val);
            q.push(...cur.children);
        };
        res.push(arr);
    };
    return res;
};