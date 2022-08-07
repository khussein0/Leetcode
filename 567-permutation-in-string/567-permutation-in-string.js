/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
	if (s1.length > s2.length) return false;
	let char = {};
	for (let i = 0; i < s1.length; i++) {
		char[s1[i]] = (char[s1[i]] || 0) + 1;
	};

	let left = 0, right = 0, s1L = s1.length; 

	while (right < s2.length) {
		if (char[s2[right]] > 0) s1L--;
		char[s2[right]]--;
		right++;
        
		if (s1L === 0) return true;

		if (right - left === s1.length) {
			if (char[s2[left]] >= 0) s1L++;
			char[s2[left]]++;
			left++;
		};
	};
	return false;
};