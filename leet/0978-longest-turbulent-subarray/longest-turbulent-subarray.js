/**
 * @param {number[]} A
 * @return {number}
 */
var maxTurbulenceSize = function(A) {
    let m = A.length
    if (m < 2) return m

    let mp = new Array(m)
    mp[0] = [1, 0]
    let ret = 1

    for (let i = 1; i < m; i++){
        let diff = A[i] - A[i - 1]
        diff = (diff == 0) ? 0 : ((diff > 0) ? 1 : -1)
        if(diff == 0){
            mp[i] = [1, diff]
        } else if (diff == mp[i - 1][1]){
            mp[i] = [2, diff]
        } else{
            mp[i] = [mp[i - 1][0] + 1, diff]
        }

        ret = Math.max(ret, mp[i][0])
    }

    return ret
};
