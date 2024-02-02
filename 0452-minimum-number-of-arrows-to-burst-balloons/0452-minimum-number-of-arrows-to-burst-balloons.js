/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a,b) => a[0] - b[0]);
    let prev = null, res = 0;
    
    for(let [s,e] of points){
        if(prev === null || prev < s){
            res++;
            prev = e;
        }else prev = Math.min(prev, e);
    }
    
    return res;
};