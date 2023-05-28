/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    return this.reduce((map, i) => {
        const key = fn(i);
        map[key] ? map[key].push(i) : map[key] = [i];
        return map;
    }, {});
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */