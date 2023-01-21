/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let res = [];
    
    function backtrack(arr, str){
        if(arr.length === 3){
            if(valid(str)) res.push([...arr, str]);
            return;
        };
        
        for(let i = 1; i < 4; i++){
            let sub = str.slice(0, i);
            if(!valid(sub)) continue;
            backtrack([...arr, sub], str.slice(i));
        };
    };
    
    function valid(str){
        if(+str > 255 || !str.length) return false;
        if(str.length >= 2 && str[0] === '0') return false;
        return true;
    };
    
    backtrack([], s);
    return res.map(r => r.join('.'));
};