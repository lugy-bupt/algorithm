/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
    if (A.length == 0) return false
    let r = 0
    for (let i of A){
        r = r * 2 + i
        if (r % 5 == 0) return true
    }
    return false
};
