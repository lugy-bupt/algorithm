/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    if (n == 1) return 0
    
    let mp = new Array(n + 1)
    for (let i = 0; i <= n; i++) mp[i] = {}
    mp[1][1] = 0
    mp[2][1] = 2
    
    let minO = function(o){
        let ret = 9999
        for (let i in o) ret = Math.min(ret, o[i])
        return ret
    }

    let dp = function(i){
        for (let j = 2; j <= i; j++){
            if (i % j == 0){
                let diff = i/j
                if (j == 2) mp[i][diff] = minO(mp[i - diff]) + 2
                else{
                    mp[i][diff] = mp[i - diff][diff] + 1
                }
            }
        }
    }

    for (let i = 3; i <= n; i++) dp(i)

    return minO(mp[n])
};
