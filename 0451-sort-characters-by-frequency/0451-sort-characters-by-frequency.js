/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let freq = s.split('').reduce((acc, cur) => {acc[cur] = (acc[cur] || 0) + 1; return acc}, {});
    return Object.keys(freq).sort((a, b) => freq[b] - freq[a]).reduce((acc, cur) => acc + cur.repeat(freq[cur]), '');
};