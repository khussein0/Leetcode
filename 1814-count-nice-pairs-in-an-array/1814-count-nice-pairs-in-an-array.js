/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function(nums) {
    const mod = 1e9 + 7;
    let arr = {}, res = 0;
    
    for(const num of nums){
        if(arr[num - rev(num)]){
            res += arr[num - rev(num)];
            arr[num - rev(num)]++;
        }else arr[num - rev(num)] = 1;
    };
    
    return res % mod;
};

const rev = (num) => Number(String(num).split('').reverse().join(''));