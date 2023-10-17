/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
    const parentArr = new Array(n).fill(0);
    let root = -1;
    
    for(let i = 0; i < n; i++){
        if(leftChild[i] !== -1){
            if(parentArr[leftChild[i]] === 1) return false;
            parentArr[leftChild[i]]++;
        };
        
        if(rightChild[i] !== -1){
            if(parentArr[rightChild[i]] === 1) return false;
            parentArr[rightChild[i]]++;
        };
    };
    
    for(let i = 0; i < n; i++){
        if(parentArr[i] === 0){
            if(root === -1) root = i;
            else return false;
        };
    };
    
    if(root === -1) return false;
    
    return dfs(leftChild, rightChild, root) === n;
};

function dfs(left, right, root){
    if(root === -1) return 0;
    return 1 + dfs(left, right, left[root]) + dfs(left, right, right[root])
}