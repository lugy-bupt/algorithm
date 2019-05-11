/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    let ret = 0
    let mp = new Map()
    for (let j = 0; j < C.length; j++) {
        for (let i = 0; i < D.length; i++) {
            let key = C[j] + D[i]
            if (mp.has(key)) {
                mp.set(key, mp.get(key) + 1)
            } else{
                mp.set(key, 1)
            }
        }
    }

    for(let i = 0; i < A.length; i++){
        for(let j = 0; j < B.length; j++){
            let key = 0 - (A[i] + B[j])
            if (mp.has(key)) {
                ret += mp.get(key)
            }
        }
    }

    return ret
};
