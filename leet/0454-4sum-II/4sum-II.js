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
    for (let i = 0; i < D.length; i++) {
        if (mp.has(D[i])) {
            mp.set(D[i], mp.get(D[i]) + 1)
        } else{
            mp.set(D[i], 1)
        }
    }

    for(let i = 0; i < A.length; i++){
        for(let j = 0; j < B.length; j++){
            for(let k = 0; k < C.length; k++){
                let x = 0 - (A[i] + B[j] + C[k])
                if (mp.has(x)) {
                    ret += mp.get(x)
                }
            }
        }
    }

    return ret
};
