/**
 * @param {Array} arr
 * @return {Matrix}
 */
var jsonToMatrix = function(arr) {
    const keys = Array.from(new Set(arr.reduce((acc, cur) =>{
        getKeys(cur).forEach(k => acc.add(k));
        return acc;
    }, new Set()))).sort();
    
    const res = [keys];
    arr.forEach(obj => res.push(keys.map(key => getVal(obj, key))));
    
    return res;
};

function isObject(obj){
    return obj !== null && typeof(obj) === 'object';
};

function getKeys(obj){
    if(!isObject(obj)) return [''];
    const res = [];
    for(let key of Object.keys(obj)){
        const nestedKeys = getKeys(obj[key]);
        for(let nestedKey of nestedKeys) res.push(nestedKey ? `${key}.${nestedKey}` : key);
    };
    return res;
};

function getVal(obj, p){
    const paths = p.split('.');
    let i = 0, val = obj;
    while(i < paths.length && isObject(val)) val = val[paths[i++]];
    return i < paths.length || isObject(val) || val === undefined ? '' : val;
};