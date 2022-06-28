/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    let charFrequency = new Map(), used = new Set(), res = 0;
    
	for(const char of s){
		if(charFrequency.has(char))
			charFrequency.set(char, charFrequency.get(char)+1);
		else
			charFrequency.set(char, 1);
	}

	for(let [char, freq] of charFrequency.entries()){
		while(used.has(freq) && freq > 0){
			freq--;
			res++;
		}
		used.add(freq);
	}
	return res;
};