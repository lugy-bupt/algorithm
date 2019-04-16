/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let m = s.length
    let mp = new Map()

    let dp = function(n){
        if (mp.has(n)) return mp.get(n)

        let ret = 0
        if (n >= 0) {
            let i = parseInt(s[n])
            if (i > 0 && i < 27) ret += (n > 0 ? dp(n - 1) : 1)
            if (n > 0 && s[n - 1] != 0){
                let ii = parseInt(s[n - 1] + s[n])
                if(ii > 0 && ii < 27) ret += (n > 1 ? dp(n - 2) : 1)
            }
        }

        mp.set(n, ret)
        return ret
    }

    for (let i = 0; i < s.length; i++) dp(i)
    return mp.get(m - 1)
};
