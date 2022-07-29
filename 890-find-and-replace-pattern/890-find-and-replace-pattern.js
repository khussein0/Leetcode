/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    const patternReplace = word => word.replace(/(\w)/g, c => word.indexOf(c));
    return words.filter(c => patternReplace(pattern) === patternReplace(c));
};