/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function(functions, n) {
    const init = functions.slice(0, n), rem = functions.slice(n);
    const shiftRem = () => rem.length && rem.shift()().then(shiftRem);
    return Promise.all(init.map((fn) => fn().then(shiftRem)));
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */