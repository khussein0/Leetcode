/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
    let l = 1, r = 10**7, res = -1;
    
    while(l <= r){
        let speed = (l + r) >> 1, sum = 0;
        
        for(let i = 0; i < dist.length - 1; i++) sum += Math.ceil(dist[i] / speed);
        sum += dist[dist.length - 1] / speed;
        
        if(sum <= hour){
            res = speed;
            r = speed - 1;
        }else l = speed + 1;
    };
    
    return res;
};