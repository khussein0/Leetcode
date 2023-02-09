/**
 * @param {string[]} ideas
 * @return {number}
 */
var distinctNames = function(ideas) {
    let map = {};
    
    for(let idea of ideas){
        let firstChar = idea.slice(0, 1), otherChars = idea.slice(1);
        if(!map[firstChar]) map[firstChar] = new Set();
        map[firstChar].add(otherChars);
    };
    
    let keys = Object.keys(map), count = 0;
    
    for(let i = 0; i < keys.length; i++){
        let firstSet = map[keys[i]];
        for(let j = i + 1; j < keys.length; j++){
            let secondSet = map[keys[j]], sCount = 0;
            for(let c of firstSet){
                if(secondSet.has(c)) sCount++;
            };
            count += 2 * (firstSet.size - sCount) * (secondSet.size - sCount);
        };
    };
    
    return count;
};