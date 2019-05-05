/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let valid = function(i, j, ignored){
        if (i > j) return false

        while(i < j){
            if (s[i] != s[j]){
                if(ignored) return false
                return valid(i + 1, j, true) || valid(i, j - 1, true)
            }
            i++
            j--
        }
        return true
    }
    return valid(0, s.length - 1, false)
};
