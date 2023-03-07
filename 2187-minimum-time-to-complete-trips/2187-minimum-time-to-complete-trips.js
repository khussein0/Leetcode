/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
    let l = 1, h = Number.MAX_SAFE_INTEGER;
    
    while(l <= h){
        let mid = l + Math.floor((h - l) / 2);
        if(search(time, mid, totalTrips)) h = mid - 1;
        else l = mid + 1;
    };
    
    return l;
};
    
function search(arr, mid, total){
    let trips = 0;
    for(let i = 0; i < arr.length; i++) trips += Math.floor(mid / arr[i]);
    return trips >= total;
};