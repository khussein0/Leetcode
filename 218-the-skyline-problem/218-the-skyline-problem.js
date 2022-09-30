/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {
    if (buildings.length === 0) return [];

    let startEndHeightList = [];
    for (let building of buildings){
        let [start, end, height] = building;
        startEndHeightList.push([start, 0-height]);
        startEndHeightList.push([end, height]);
    };
    startEndHeightList.sort((a,b)=> a[0]===b[0] ? a[1]-b[1] : a[0]-b[0]);
    let result = [], currHeights = [0], prevMaxHeight = 0;
    for (let i = 0; i < startEndHeightList.length; i++){
        let [pos, height] = startEndHeightList[i];
        if (height < 0){
            currHeights.push(0-height);
        }else{
            let removeIdx = currHeights.indexOf(height);
            currHeights.splice(removeIdx,1);
        };

        let currMaxHeight = Math.max(...currHeights);
        if (currMaxHeight != prevMaxHeight) result.push([pos, currMaxHeight]);
        prevMaxHeight = currMaxHeight;
    };
    return result;
};