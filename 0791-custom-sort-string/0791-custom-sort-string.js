/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    let res = '';
    const map = new Map();
    
    for(const char of s) map.set(char, (map.get(char) || 0) + 1);
    
    for(const char of order){
        if(map.has(char)){
            res += char.repeat(map.get(char));
            map.delete(char);
        }
    }
    
    for(let [char, count] of map.entries()) res += char.repeat(count);
    
    return res;
};