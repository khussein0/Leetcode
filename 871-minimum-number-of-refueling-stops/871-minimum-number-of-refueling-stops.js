/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function(target, startFuel, stations) {
    let n = stations.length, pq = new MaxPriorityQueue(), ans = 0;
    for (let i = 0; i <= n; i++) {
        let dist = i === n ? target : stations[i][0];
        while (startFuel < dist) {
            if (!pq.size()) return -1;
            startFuel += pq.dequeue().element, ans++;
        };
        if (i < n) pq.enqueue(stations[i][1]);
    };
    return ans;
};