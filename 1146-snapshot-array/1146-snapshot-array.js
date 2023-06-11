/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
    this.arr = Array(length).fill(null).map(e => new Map());
    this.snapId = 0;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    this.arr[index].set(this.snapId, val);
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    this.snapId++;
    return this.snapId - 1;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    const ele = Array.from(this.arr[index].keys());
    let l = 0, r = ele.length - 1, id = -1;
    
    while(l <= r){
        const mid = (l + r) >> 1;
        if(ele[mid] <= snap_id){
            id = ele[mid];
            l = mid + 1;
        }else r = mid - 1;
    };
    
    return id === -1 ? 0 : this.arr[index].get(id);
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */