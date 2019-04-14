/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    let m = envelopes.length
    if (m < 2) return m
    
    envelopes.sort((a, b) => a[0] - b[0])

    //console.log(envelopes)
    let mp = new Map()
    let dp = function(i){
        if(mp.has(i)) return mp.get(i)
        let rt = 0
        if (i == 0) rt = 1 
        else{
            let envs = []
            for (let j = i; j >=0; j--){
                if (envelopes[j][0] < envelopes[i][0] && envelopes[j][1] < envelopes[i][1]){
                    envs.push(dp(j))
                }
            }

            rt = (envs.length > 0) ? Math.max.apply(null, envs) + 1 : 1
        }

        mp.set(i, rt)
        return rt
    }

    let ret = 0
    for (let i = 0; i < m; i++){
        ret = Math.max(ret, dp(i))
    }
    return ret    
};
