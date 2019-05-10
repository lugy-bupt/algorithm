/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let x = []
    while(num > 0){
        x.push(num % 2)
        num = num >> 1
    }
    
    let ret = 0
    for(let i = x.length - 1; i >= 0; i--){
        ret = ret * 2 + (x[i] ^ 1)
    }
    return ret
};
