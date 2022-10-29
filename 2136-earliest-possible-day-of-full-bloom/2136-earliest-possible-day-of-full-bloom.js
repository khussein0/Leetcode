/**
 * @param {number[]} plantTime
 * @param {number[]} growTime
 * @return {number}
 */
var earliestFullBloom = function(plantTime, growTime) {
    let arr = [];
    for(let i = 0; i < plantTime.length; i++){
        arr.push([plantTime[i], growTime[i]]);
    };
    
    arr.sort((a,b) => b[1] - a[1]);
    
    let plant = 0, bloom = 0;
    for(let i = 0; i < arr.length; i++){
        plant += arr[i][0];
        bloom = Math.max(bloom, plant + arr[i][1]);
    };
    
    return bloom;
};