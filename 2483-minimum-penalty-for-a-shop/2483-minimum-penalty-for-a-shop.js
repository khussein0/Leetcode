/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
    let prefix = 0, res = 0;
    
    for(let i = 0; i <= customers.length; i++){
        if(customers[i] === 'Y'){
            prefix++;
            
            if(prefix > 0){
                res = i + 1;
                prefix = 0;
            };
        }else{
            prefix--;
        };
    };
    
    return res;
};