/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let mp = new Map()
    
    let match = function(s, si, p, pi){
        if (p.length == pi) return s.length == si

        let key = si + "-" + pi
        if (mp.has(key)) return mp.get(key)

        let s0 = s[si]
        let p0 = p[pi]
        let ret = false
        if ( p0 == "*" ) {
            ret = match(s, si, p, pi + 1) || (si < s.length && match(s, si + 1, p, pi))
        } else {
            ret = (si < s.length) && (s0 == p0 || p0 == "?") && match(s, si + 1, p, pi + 1)
        }

        mp.set(key, ret)
        return ret
    }

    return match(s, 0, p, 0)
};
