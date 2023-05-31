
var UndergroundSystem = function() {
    this.checkins = new Map();
    this.routes = new Map();
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.checkins.set(id, [stationName, t])
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    let [stn, start] = this.checkins.get(id), route = stn + "," + stationName;
    this.checkins.delete(id);
    if (!this.routes.has(route)) this.routes.set(route, new Uint32Array(2));
    let trip = this.routes.get(route);
    trip[0]++;
    trip[1] += t - start;
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    let [count, sum] = this.routes.get(startStation + "," + endStation);
    return sum / count;
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */