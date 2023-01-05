/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    let pre = null, res = 0;
    points.sort((a,b) => a[0] - b[0]);
    
    for(let [s, e] of points){
        if(pre === null || pre < s){
            res++;
            pre = e;
        }else pre = Math.min(pre, e);
    };
    
    return res;
};