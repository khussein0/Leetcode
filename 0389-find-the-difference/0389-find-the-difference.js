/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const sumS = s.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    const sumT = t.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    return String.fromCharCode(sumT - sumS);
};