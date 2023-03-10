/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function(head) {
    this.head = head;
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    let i = 0 , res = 0, node = this.head;
    
    while(node){
        i++;
        if(Math.floor(Math.random() * i) + 1 === i) res = node.val;
        node = node.next;
    };
    
    return res;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */