/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    const radiant = [], dire = [],  len = senate.length;
    
    for(let i = 0; i < len; i++){
        if(senate[i] === 'R') radiant.push(i + len);
        else dire.push(i + len);
    };
    
    while(radiant.length && dire.length){
        if(radiant[0] < dire[0]) radiant.push(radiant[0] + len);
        else dire.push(dire[0] + len);
        radiant.shift();
        dire.shift();
    };
    
    return radiant.length ? "Radiant" : "Dire";
};