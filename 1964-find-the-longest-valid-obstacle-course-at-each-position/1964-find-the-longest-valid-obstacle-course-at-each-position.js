/**
 * @param {number[]} obstacles
 * @return {number[]}
 */
var longestObstacleCourseAtEachPosition = function(obstacles) {
    const len = obstacles.length, res = new Array(len).fill(1), stack = [obstacles[0]];
    
    for(let i = 1; i < len; i++){
        if(obstacles[i] >= stack[stack.length - 1]){
            stack.push(obstacles[i]);
            res[i] = stack.length;
        }else{
            let l = 0, r = stack.length - 1;
            while(l <= r){
                let mid = (l + r) >> 1;
                if(stack[mid] <= obstacles[i]) l = mid + 1;
                else r = mid - 1;
            };
            
            stack[l] = obstacles[i];
            res[i] = l + 1;
        };
    };
    
    return res;
};