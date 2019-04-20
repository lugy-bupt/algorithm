/**
 * @param {number[]} A
 * @return {number}
 */
var lenLongestFibSubseq = function(A) {
    let m = A.length
    let mp = new Array(m)
    for (let i = 0; i < m; i++) mp[i] = new Array(m).fill(2)

    let bSearch = function(s, e, t){
        while (s < e){
            let m = Math.floor((s + e)/2)
            if (A[m] == t) return m
            else if (A[m] < t) s = m + 1
            else e = m - 1
        }
        return t == A[s] ? s : - 1
    }

    let rt = 0
    for (let i = 2; i < m; i++){
        for (let j = i - 1; j >= 0; j--){
            let r = A[i] - A[j]
            let idx = bSearch(0, j - 1, r)
            if (idx != -1){
                mp[i][j] = Math.max(mp[i][j], mp[j][idx] + 1)
                rt = Math.max(rt, mp[i][j])
            }
            
        }
    }
    return rt < 3 ? 0 : rt
};
