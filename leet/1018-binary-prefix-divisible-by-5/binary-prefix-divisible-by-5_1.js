/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
    if (!A) return []

    let sum = 0
    let ret = []
    for (let i = 0; i < A.length; i++){
        sum = (sum * 2 + A[i]) % 5
        console.log(sum)
        ret.push(sum == 0)
    }
    return ret
};
