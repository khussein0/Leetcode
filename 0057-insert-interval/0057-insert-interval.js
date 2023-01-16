/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let [s,e] = newInterval, r = [], l = [];
    
    for(let interval of intervals){
        let [first ,last] = interval;
        
        if(last < s) l.push(interval);
        else if(first > e) r.push(interval);
        else{
            s = Math.min(s, first);
            e = Math.max(e, last);
        };
    };
    
    return [...l, [s,e], ...r];
};