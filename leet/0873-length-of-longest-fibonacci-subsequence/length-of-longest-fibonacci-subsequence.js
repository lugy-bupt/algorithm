/**
 * @param {number[]} A
 * @return {number}
 */
var lenLongestFibSubseq = function(A) {
    let m = A.length
    let mp = new Map()

    let bSearch = function(s, e, t){
        while (s < e){
            let m = Math.floor((s + e)/2)
            if (A[m] == t) return m
            else if (A[m] < t) s = m + 1
            else e = m - 1
        }
        return t == A[s] ? s : - 1
    }

    for (let i = 1; i < m; i++){
        for (let j = i - 1; j >= 0; j--){
            let r = A[i] - A[j]
            let idx = bSearch(0, j - 1, r)
            mp.set(j +"-" + i, mp.get(idx + "-" + j) + 1 || 2)
        }
    }

    let rt = 0
    for (let v of mp.values()) 
        rt = Math.max(rt, v)

    return rt < 3 ? 0 : rt
};
