/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length = 0) return ""

    let ret = ""

    for (let i = 0; i < s.length; i++){
        let j = 0
        while (i - j >=0 && i + j < s.length && s[i-j] == s[i+j]) j++
        let pa = s.slice(i - (j - 1), i + j)
        if(pa.length > ret.length) ret = pa

        if (i + 1 < s.length && s[i] == s[i + 1]){
            let k = 0
            while (i - k >=0 && i + 1 + k < s.length && s[i-k] == s[i + 1 + k]) k++
            let pa1 = s.slice(i - (k - 1), i + 1 + k)
            if(pa1.length > ret.length) ret = pa1
        }
    }

    return ret    
};
