/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let max = -1, map = new Map();
    for(let s = 0, e = 0; e < fruits.length; e++){
        let curr = fruits[e];
        map.set(curr, map.get(curr) + 1 || 1);
        while(map.size > 2){
            let char = fruits[s], count = map.get(char);
            if(count - 1 === 0) map.delete(char);
            else map.set(char, count - 1);
            s++;
        };
        if(map.size >= 1) max = Math.max(max, e + 1 - s);
    };
    return max;
};