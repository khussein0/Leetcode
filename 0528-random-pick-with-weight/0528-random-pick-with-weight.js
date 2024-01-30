/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.weights = [];
    this.sum = 0;
    for(let i = 0; i < w.length; i++){
        this.sum += w[i];
        this.weights.push(this.sum);
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let idx = Math.floor(Math.random() * this.sum), arr = this.weights, s = 0, e = arr.length-1;
    
    while(s <= e){
        let mid = (s+e) >> 1;
        if(idx < arr[mid]) e = mid - 1;
        else s = mid + 1;
    }
    
    return s;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */