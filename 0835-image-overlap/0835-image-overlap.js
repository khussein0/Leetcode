/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function(img1, img2) {
    let n = img1.length, res = 0;
    for (let i = -n + 1; i < n; i++) {
        for (let j = -n + 1; j < n; j++) {
            let t = 0;
            for (let x = 0; x < n; x++) {
                for (let y = 0; y < n; y++) {
                    if (x + i >= 0 && x + i < n && y + j >= 0 && y + j < n && img1[x][y] === 1 && img2[x + i][y + j] === 1) {
                        t++;
                    };
                };
            };
            res = Math.max(res, t);
        };
    };
    return res;
};