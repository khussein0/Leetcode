/**
 * @param {string[]} strs
 * @return {number}
 */
var numSimilarGroups = function(strs) {
    let len = strs.length, strLen = strs[0].length, visited = Array(len).fill(false), q = [], res = 0, cur, diff;
    
    for(let i = 0; i < len; i++){
        if(!visited[i]){
            res++;
            q.push(strs[i]);
        };
        
        while(q.length){
            cur = q.pop();
            for(let j = 0; j < len; j++){
                if(!visited[j]){
                    diff = 0;
                    for(let k = 0; k < strLen; k++){
                        if(cur[k] !== strs[j][k] && ++diff > 2) break;
                    };
                    if(diff <= 2){
                        visited[j] = true;
                        q.push(strs[j]);
                    };
                };
            };
        };
    };
    
    return res;
};