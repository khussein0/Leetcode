/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    const char = {}, maxHeap = new MaxPriorityQueue(), res = new Array(s.length);
    
    for(const ch of s) char[ch] = (char[ch] || 0) + 1;    
    for(const ch in char) maxHeap.enqueue(ch, char[ch]);
    
    const maxChar = maxHeap.front().element, maxCount = char[maxChar];
    
    if(maxCount > Math.floor((s.length + 1) / 2)) return '';
    
    let pos = 0;
    while(!maxHeap.isEmpty()){
        const cur = maxHeap.dequeue().element, count = char[cur];
        
        for(let i = 0; i < count; i++){
            res[pos] = cur;
            pos += 2;
            if(pos >= s.length) pos = 1;
        };
    };
    
    return res.join('');
};