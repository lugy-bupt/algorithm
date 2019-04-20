/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let mp = new Set()
    
    for (let i = 0; i < A.length; i++){
        if (mp.has(A[i])) return A[i]
        mp.add(A[i])
    }
    
    return ""
};
