/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    const res = [];
    
    for(let i = 0; i < l.length; i++){
        let curNums = nums.slice(l[i], r[i]+1);
        res.push(checkArithmetic(curNums));
    };
    
    return res;
};

function checkArithmetic(arr){
    arr.sort((a,b) => a - b);
    let diff = arr[1] - arr[0];
    for(let i = 2; i < arr.length; i++){
        if(arr[i] - arr[i-1] !== diff) return false;
    };
    return true;
};