
var SummaryRanges = function() {
    this.arr = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
SummaryRanges.prototype.addNum = function(value) {
    this.arr[value] = true;
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function() {
    let res = [];
    for(let i = 0; i < this.arr.length; i++){
        if(this.arr[i]){
            let j = i;
            while(this.arr[j]) j++;
            res.push([i, j - 1]);
            i = j;
        };
    };
    return res;
};

/** 
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(value)
 * var param_2 = obj.getIntervals()
 */