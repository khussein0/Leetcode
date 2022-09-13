/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
    let count = 0, mostSig = 1<<7, secSig = 1<<6;
    for (let n of data) {
        if (count == 0) {
            let mask = 1<<7;
            while (n & mask) {
                mask = mask>>1;
                count++;
            };
            if (count == 0) continue;
            if (count == 1 || count > 4) return false;
        } else {
            if (!(n&mostSig && !(n&secSig))) return false;
        };
        count--;
    };
    return count == 0;
};