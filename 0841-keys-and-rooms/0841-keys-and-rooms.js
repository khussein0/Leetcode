/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let visited = new Array(rooms.length).fill(0), stack = [0], count = 1;
    visited[0] = 1;
    
    while(stack.length){
        let keys = rooms[stack.pop()];
        for(let key of keys){
            if(!visited[key]){
                stack.push(key);
                visited[key] = 1;
                count++;
            };
        };
    };
    
    return rooms.length === count;
};