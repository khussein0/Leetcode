/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    let res = 0;
    boxTypes.sort((a,b) => b[1] - a[1]);
    for(var i = 0; truckSize && i < boxTypes.length; i++){
        let min = Math.min(truckSize, boxTypes[i][0])
        res += min * boxTypes[i][1];
        truckSize -= min;
    }
    return res;
};