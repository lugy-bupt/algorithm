/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let mp = new Map()

    let match = function(s, si, p, pi){
        if (pi == p.length) return si == s.length

        let key = si + "-" + pi
        if(mp.has(key)) return mp.get(key)

        let p0 = p[pi]
        let s0 = s[si]
        let ret = false
        if (pi < p.length - 1 && p[pi + 1] == "*"){
            ret = match(s, si, p, pi + 2) || (si < s.length && (p0 == s0 || p0 == ".") && match(s, si + 1, p, pi))
        }else{
            ret = (si < s.length && (p0 == s0 || p0 == ".")) && match(s, si + 1, p, pi + 1)
        }
        mp.set(key, ret)
        return ret
    }

    return match(s, 0, p, 0)
};
