/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows >= s.length || numRows == 1) return s

    let ret = ""

    for (let i = 0; i < numRows; i++){
        let x = 0
        while (x * 2 * (numRows - 1) - i < s.length) {
            if(x * 2 * (numRows - 1) - i >= 0)
                ret += s[x * 2 * (numRows - 1) - i]
            if((i > 0 && i < numRows - 1) && (x * 2 * (numRows - 1) + i < s.length))
                ret += s[x * 2 * (numRows - 1) + i] 
            x += 1
        }
    }

    return ret
};
