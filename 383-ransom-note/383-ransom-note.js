/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const arr = ransomNote.split('');
    for (const char of magazine) {
        const index = arr.indexOf(char);
        if (index > -1) {
          arr.splice(index, 1);
        };
        if (!arr.length) {
            return true;
        };
    };
    return false;
};