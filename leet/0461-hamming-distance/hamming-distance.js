/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let n = x ^ y
    let ret = 0
    while(n > 0){
        ret += n % 2
        n = Math.floor(n / 2)
    }
    return ret
};
