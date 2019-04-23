/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    let len = strs.length
    if (len == 0) return 0

    let count = function(a){
        let ret = [0, 0]
        for (let i of a){
            ret[i] += 1
        }
        return ret
    }

    let sArr = strs.map(str => count(str))

    let mp = new Map()

    for (let c of sArr){
        for (let i = m; i >= c[0]; i--){
            for (let j = n; j >= c[1]; j--){
                let key = i + "-" + j
                let ret = mp.get(key) || 0
                ret = Math.max(ret, (mp.get((i - c[0]) + "-" + (j - c[1])) || 0) + 1)
                mp.set(key, ret)
            }
        }
    }

    return mp.get(m + "-" + n) || 0
};
