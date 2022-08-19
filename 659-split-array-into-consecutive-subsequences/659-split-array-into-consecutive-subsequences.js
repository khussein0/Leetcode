/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
    let subseq = [];
    
    nums.forEach(num => {
        for(let i = subseq.length - 1; i >= 0; i--){
            let obj = subseq[i];
            let numFreq = obj.num;
            
            if(num === numFreq + 1){
                obj.num = num;
                obj.length += 1;
                return;
            };
        };
        
        subseq.push({length: 1, num});
    });
    
    return !subseq.find(i => i.length < 3);
};