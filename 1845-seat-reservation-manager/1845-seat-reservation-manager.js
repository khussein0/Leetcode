/**
 * @param {number} n
 */
var SeatManager = function(n) {
    this.seats = new Array(n+1).fill(false);
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function() {
    for(let i = 1; i < this.seats.length; i++){
        if(this.seats[i] === false){
            this.seats[i] = true;
            return i;
        };
    };
};

/** 
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function(seatNumber) {
    this.seats[seatNumber] = false;
};

/** 
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */