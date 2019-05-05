/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let end = Math.floor(s.length / 2)
    for (let i = 1; i <= end; i++){
        if(s.length % i == 0 && s.length / i > 1){
            let single = s.substr(0, i)
            let a = new Array(s.length / i).fill(single)
            if(a.join("") == s){
                return true
            }
        }
    }
    return false
};
