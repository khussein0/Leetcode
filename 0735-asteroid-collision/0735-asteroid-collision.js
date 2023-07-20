/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
   const stack = [];
    
    for(let i = 0; i < asteroids.length; i++){
        const cur = asteroids[i], prev = stack[stack.length - 1];
        
        if(!stack.length || prev < 0 || cur > 0) stack.push(cur);
        else if(cur + prev === 0) stack.pop();
        else if(Math.abs(prev) < Math.abs(cur)){
            stack.pop();
            i--;
        };
    };
    
    return stack;
};