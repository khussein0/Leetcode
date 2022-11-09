
var StockSpanner = function() {
    this.stack = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let [cPrice, cSpan] = [price, 1];
    
    while(this.stack.length && this.stack[this.stack.length - 1].price <= cPrice){
        let prev = this.stack.pop();
        let[pPrice, pSpan] = [prev.price, prev.span];
        cSpan += pSpan;
    };
    this.stack.push({price: cPrice, span: cSpan});
    return cSpan;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */