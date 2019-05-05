/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    if(s.length == 0) return true

    let bt = function(p, left){
        if (left < 0) return false

        if (p == s.length){
            return left == 0
        }

        if(s[p] == "("){
            return bt(p + 1, left + 1)
        }else if(s[p] == ")"){
            return bt(p + 1, left - 1)
        }else{ // *
            if(bt(p + 1, left + 1)) return true
            if(bt(p + 1, left)) return true
            if(bt(p + 1, left - 1)) return true
        }

        return false
    }
    
    let t = s.replace(/\(\)/g, "")
    while (t != "" && t != s) {
        s = t
        t = s.replace(/\(\)/g, "")
    }
    s = t

    return bt(0, 0)
};
