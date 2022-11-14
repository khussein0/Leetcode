/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
    let subCount = stones.length, parent = [];
    
    for(let i = 0; i < subCount; i++) parent[i] = i;
    
    for(let idx = 0; idx < stones.length; idx++){
        let fStone = stones[idx];
        
        for(let index = 0; index < stones.length; index++){
            let sStone = stones[index];
            
            if(fStone[0] !== sStone[0] && fStone[1] !== sStone[1]) continue;
            
            if(parent[fStone] === fStone){
                parent[fStone] = index;
                subCount -= 1;
            }else{
                let curIdx = parent[idx], curIndex = parent[index];
                while(parent[curIdx] !== curIdx) curIdx = parent[curIdx];
                while(parent[curIndex] !== curIndex) curIndex = parent[curIndex];
                if(curIdx !== curIndex){
                    parent[curIdx] = curIndex;
                    subCount -= 1;
                };
            };
        };
    };
    
    return stones.length - subCount;
};