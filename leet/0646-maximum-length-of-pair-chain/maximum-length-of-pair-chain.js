/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    let m = pairs.length
    if(m == 0) return 0
    pairs.sort((a,b) => a[0] - b[0])
    
    let mp =new Map()

    let dp = function(i){
        if (mp.has(i)) return mp.get(i)
        let rt = 0
        if (i == 0) rt = 1
        else{
            let ps = []
            for (let j = i; j >= 0; j--){
                if (pairs[i][0] > pairs[j][1]) ps.push(dp(j))
            }

            rt = ps.length > 0 ? Math.max.apply(null, ps) + 1 : 1
        }

        mp.set(i, rt)
        return rt
    }

    let ret = 0
    for (let i = 0; i < m; i++) ret = Math.max(ret, dp(i))
    return ret
};
