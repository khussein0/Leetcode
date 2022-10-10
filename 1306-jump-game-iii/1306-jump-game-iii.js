/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    function dfs(i){
        if(i < 0 || i >= arr.length || arr[i] === 'V') return false;
        if(!arr[i]) return true;
        let move = arr[i];
        arr[i] = 'V';
        return dfs(i - move) || dfs(i + move);
    };
    return dfs(start);
};