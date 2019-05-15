/**
 * @param {number[]} A
 * @return {number}
 */
var minScoreTriangulation = function(A) {
    if (A.length == 3) return A[0] * A[1] * A[2]

    let mp = new Array(A.length)
    for (let i = 0; i < mp.length; i++) {
        mp[i] = new Array(A.length).fill(99999999999)
    }

    let dp = function(l, r){
        if (r < l + 2) return 0
        if (mp[l][r] != 99999999999) return mp[l][r]

        if (r == l + 2) {
            mp[l][r] = A[l] * A[l + 1] * A[l + 2]
        }else{
            for (let i = l + 1; i < r; i++){
                mp[l][r] = Math.min(mp[l][r], dp(l, i) + dp(i, r) + A[l] * A[i] * A[r])
            }
        }
        return mp[l][r]
    }

    let ret = dp(0, A.length - 1)
    return ret
};
