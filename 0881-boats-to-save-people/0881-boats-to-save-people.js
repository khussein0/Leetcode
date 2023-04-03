/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    let res = 0, i = 0, j = people.length - 1;
    people.sort((a,b) => a - b);
    
    while(i <= j){
        if(people[j] + people[i] <= limit) i++;
        res++;
        j--;
    };
    
    return res;
};