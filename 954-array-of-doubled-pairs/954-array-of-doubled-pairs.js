/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function(arr) {
    let obj = {}, res = 0;
    arr.sort((a,b) => a - b);
    for(let i = 0; i < arr.length; i++){
        if(obj[arr[i] / 2]){
            obj[arr[i] / 2]--;
            res++;
        }else if(obj[arr[i] * 2]){
            obj[arr[i] * 2]--;
            res++;
        }else obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    };
    
    return res >= arr.length / 2;
};