/**
 * @param {number[][]} flowers
 * @param {number[]} people
 * @return {number[]}
 */
var fullBloomFlowers = function(flowers, people) {
    const diff = new Map();
    
    for(const [s, e] of flowers){
        diff.set(s, (diff.get(s) ?? 0) + 1);
        diff.set(e + 1, (diff.get(e + 1) ?? 0) - 1);
    };
    
    const times = [...diff.keys()].sort((a,b) => a - b);
    const id = [...people.keys()].sort((a,b) => people[a] - people[b]);
    let j = 0, sum = 0;
    
    for(const i of id){
        while(j < times.length && times[j] <= people[i]) sum += diff.get(times[j++]);
        people[i] = sum;
    };
    
    return people;
};