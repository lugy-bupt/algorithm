/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(!s) return 0

    let last = 0
    let ret = 0
    let mp = new Map()

    for (let i = 0; i < s.length; i++){
        if(mp.has(s[i]) && mp.get(s[i]) >= last){
            ret = Math.max(ret, i - last)
            last = mp.get(s[i]) + 1
        }
        
        mp.set(s[i], i)  
    }

    ret = Math.max(ret, s.length - last)
    return ret
};
