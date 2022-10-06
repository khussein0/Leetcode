/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    bfs(root);
    return root;
};

function bfs(root: Node | null) {
    if(!root) {
        return;
    };
        let q: Node[] = [root];
        let q2: Node[] = [];
        while (q.length > 0) {
            const node = q.pop()!!;
            node.next = q.length > 0? q[q.length - 1] : null;
            if(node.left) {
                q2.unshift(node.left);
            };
            if(node.right) {
                q2.unshift(node.right);
            };
            if(q.length == 0) {
                q = q2.slice();
                q2 = [];
            };
        };
};