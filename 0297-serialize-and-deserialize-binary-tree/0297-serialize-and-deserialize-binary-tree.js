/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    const tree = [];
    
    function serial(node){
        if(node === null){
            tree.push(null);
            return;
        };
        
        tree.push(node.val);
        serial(node.left);
        serial(node.right);
    };
    
    serial(root);
    return tree;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    function deserial(){
        if(data.length === 0) return;
        
        const val = data.shift();
        if(val === null) return null;
        
        const node = new TreeNode(val);
        node.left = deserial();
        node.right = deserial();
        
        return node;
    };
    
    return deserial();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */