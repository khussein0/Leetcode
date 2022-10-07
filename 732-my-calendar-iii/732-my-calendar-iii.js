
var MyCalendarThree = function() {
    this.cal = {};
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function(start, end) {
    this.cal[start] = (this.cal[start] || 0) + 1;
    this.cal[end] = (this.cal[end] || 0) - 1;
    let max = count = 0;
    for(let i in this.cal){
        max = Math.max(max, count += this.cal[i]);
    };
    return max;
};

/** 
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */