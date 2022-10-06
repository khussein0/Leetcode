
var TimeMap = function() {
    this.map = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.map.has(key)) this.map.set(key, []);
    this.map.get(key)[timestamp] = value;
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if(!this.map.has(key)) return '';
    let i = this.map.get(key);
    if(i[timestamp]) return i[timestamp];
    while(timestamp-- > -1){
        if(i[timestamp]) return i[timestamp];
    };
    return '';
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */