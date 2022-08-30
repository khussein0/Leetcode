/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    for(let i = 0; i < matrix.length; i++){
      for(let j = matrix.length - 1; j >= 0; j--){
          matrix[i].push(matrix[j].shift());
      };
    };
};