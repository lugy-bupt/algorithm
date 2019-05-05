/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (s.length == 0) return 0
    let i = s.length - 1
    while(i>= 0 && s[i] == " ") i--
    if (i < 0) return 0
    let ret = 0
    while(i >= 0 && s[i] != " ") { ret++; i-- }
    return ret
};
