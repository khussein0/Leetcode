/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return needle === "" ? 0 : haystack.indexOf(needle);
};