/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
    if (N == 0) return 1

    let x = N
    let xx = 1

    while (x > 0){
        x = x >> 1
        xx = xx << 1
    }

    return N ^ (xx - 1)
};
