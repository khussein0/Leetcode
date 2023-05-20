/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function(fn, t) {
    let flag = false, nextArg;
    
    function run(){
        if(!flag && nextArg){
            fn(...nextArg);
            flag = true;
            nextArg = undefined;
            setTimeout(() => {
                flag = false;
                run();
            }, t);
        };
    };
    
    return function(...args) {
        nextArg = args;
        run();
    };
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */