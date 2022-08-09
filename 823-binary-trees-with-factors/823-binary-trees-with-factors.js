/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function(arr) {
    arr.sort((a,b) => a - b);
    let map = {}, len = arr.length, res = 0;
    for(let i = 0; i < len; i++){
        let num = arr[i], ways = 1, sq = Math.sqrt(num);
        for(let j = 0, a = arr[0]; a <= sq; a = arr[++j]){
            let b = num / a;
            if(map[b]){
                ways = (ways + map[a] * map[b] * (a === b ? 1 : 2)) % 1000000007;
            };
        };
        map[num] = ways;
        res = (res + ways) % 1000000007;
    };
    return res;
};