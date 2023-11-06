/**
 * @param {number} n
 */
var SeatManager = function(n) {
    this.last = 0;
    this.seats = [];
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function() {
    if(this.seats.length === 0) return ++this.last;
    else{
        this.seats.sort((a,b) => a - b);
        return this.seats.shift();
    };
};

/** 
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function(seatNumber) {
    if(seatNumber === this.last) this.last--;
    else this.seats.push(seatNumber);
};

/** 
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */