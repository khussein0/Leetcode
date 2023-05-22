/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function(object) {
    if(object === null) return 'null';
    if(typeof(object) === 'string') return `"${object}"`;
    if(typeof(object) === 'number' || typeof(object) === 'boolean') return String(object);
    if(Array.isArray(object)){
        const arr = object.map(i => jsonStringify(i)).join(',');
        return `[${arr}]`;
    };
    if(typeof(object) === 'object'){
        const keys = Object.keys(object);
        const arr = keys.map(k => `"${k}":${jsonStringify(object[k])}`);
        return `{${arr.join(',')}}`;
    };
};