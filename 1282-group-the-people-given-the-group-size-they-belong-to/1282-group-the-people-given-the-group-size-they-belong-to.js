/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const group = {}, res = [];
    
    for(let i = 0; i < groupSizes.length; i++){
        if(!group[groupSizes[i]]) group[groupSizes[i]] = [];
        
        group[groupSizes[i]].push(i);
        
        if(group[groupSizes[i]].length === groupSizes[i]){
            res.push([...group[groupSizes[i]]]);
            group[groupSizes[i]] = [];
        };
    };
    
    return res;
};