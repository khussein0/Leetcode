
var MyCalendar = function() {
    this.cal = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    let left = 0, right = this.cal.length - 1;
    while(left <= right){
        let mid = left + Math.floor((right - left) / 2);
        let [s,e] = this.cal[mid];
        if(s < end && start < e) return false;
        if(start >= e) left = mid + 1;
        else right = mid - 1;
    }
    this.cal.splice(left,0,[start,end]);
    return true;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */