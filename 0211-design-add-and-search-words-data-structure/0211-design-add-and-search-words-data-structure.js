
var WordDictionary = function() {
    this.trie = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let trie = this.trie;
    for(let ch of word){
        if(!trie[ch]) trie[ch] = {};
        trie = trie[ch];
    };
    trie.isWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    function dfs(word, idx, node){
        if(idx === word.length) return node.isWord === true;
        if(word[idx] === '.'){
            for(let ch in node){
                if(dfs(word, idx + 1, node[ch])) return true;
            };
        }else{
            if(node[word[idx]]) return dfs(word, idx + 1, node[word[idx]]);
        };
        return false;
    };
    
    return dfs(word, 0, this.trie);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */