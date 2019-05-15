/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
    let mp = new Map()

    let dp = function(n){
        if(n == 1) return false
        if(mp.has(n)) return mp.get(n)

        let x = Math.floor(n / 2)
        let ret = false
        for (let i = 1; i <= x; i++){
            if (n % i == 0){
                ret = ret || !dp(n - i)
                if (ret) break
            }
        }

        mp.set(n, ret)
        return ret
    }

    let ret = dp(N)
    return ret
};
