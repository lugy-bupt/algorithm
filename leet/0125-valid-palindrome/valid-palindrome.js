/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let start = 0
    let end = s.length - 1

    let isAlpha = function(x){
        let c = x.charCodeAt()
        return (c > 64 && c < 91) || (c > 96 && c < 123) || (c > 47 && c < 58)
    }

    while (start < end){
        while(start < end && !isAlpha(s[start])) start++
        while(start < end && !isAlpha(s[end])) end--

        if(s[start].toUpperCase() != s[end].toUpperCase()) return false
        start++
        end--
    }

    return true
};
