/**
 * @param {number[]} A
 * @return {number}
 */
var longestArithSeqLength = function(A) {
    let m = A.length
    let mp = new Array(m)
    for (let i = 0; i < m; i++) mp[i] = new Array(m).fill(2)

    let search = function(s, e, t){
        while (s <= e){
            if (A[e] == t) return e
            e--
        }
        return -1
    }
    
    let ret = 2
    for (let i = 2; i < m; i++) {
        for (let j = i - 1; j > 0; j--){
            let n = A[j] * 2 - A[i]
            let idx = search(0, j - 1, n)
            if(idx != -1) {
                mp[j][i] = Math.max(mp[j][i], mp[idx][j] + 1)
                ret = Math.max(ret, mp[j][i])
            }
        }
    }
    // console.log(mp)
    return ret
};
