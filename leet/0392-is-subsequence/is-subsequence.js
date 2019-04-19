/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s == "") return true
    if (t == "") return false

    let i = 0
    let j = 0

    while (i < s.length && j < t.length){
        while(j < t.length && t[j] != s[i]) j++
        i++, j++
    }
    return i == s.length && j <= t.length
};
