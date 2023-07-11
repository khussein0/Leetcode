/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    if(!root) return [];
    const targetNode = findTarget(root, null, target), res = [];
    findAllKs(targetNode, k, res);
    return res;
};

function findTarget(node, parent, target){
    if(!node) return;
    node.parent = parent;
    if(node === target) return node;
    return findTarget(node.left, node, target) || findTarget(node.right, node, target);
};

function findAllKs(node, k, res){
    if(!node || node.visited) return res;
    if(k === 0){
        res.push(node.val);
        return res;
    };
    node.visited = true;
    findAllKs(node.left, k-1, res);
    findAllKs(node.right, k-1, res);
    findAllKs(node.parent, k-1, res);
};