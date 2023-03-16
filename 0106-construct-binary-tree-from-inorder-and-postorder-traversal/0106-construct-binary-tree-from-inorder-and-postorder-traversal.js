/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    let hash = {};
    for(let i = 0; i < inorder.length; i++) hash[inorder[i]] = i;
    
    function build(s, e){
        if(s > e) return null;
        let val = postorder.pop(), root = new TreeNode(val);
        root.right = build(hash[val] + 1, e);
        root.left = build(s, hash[val] - 1);
        return root;
    };
    
    return build(0, inorder.length - 1);
};