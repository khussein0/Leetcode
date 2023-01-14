/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function(s1, s2, baseStr) {
    let arr = new Array(26), res = "";
    
    for(let i = 0; i < arr.length; i++) arr[i] = String.fromCharCode(i + 97);
    
    for(let i = 0; i < s1.length; i++){
        let f = arr[s1[i].charCodeAt(0) - 97], s = arr[s2[i].charCodeAt(0) - 97];
        if(f === s) continue;
        let rTo = "", rFrom = "";
        if(f > s){
            rTo = s;
            rFrom = f;
        }else{
            rTo = f;
            rFrom = s;
        };
        for(let j = 0; j < arr.length; j++){
            if(arr[j] === rFrom) arr[j] = rTo;
        };
    };
    
    for(let i = 0; i < baseStr.length; i++) res += arr[baseStr.charCodeAt(i) - 97];
    
    return res;
};