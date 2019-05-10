/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if (num == 0) return "0"
    
    let x = (num > 0) ? 1 : -1
    num = num > 0 ? num: 0-num
    
    let ret = []
    while (num > 0){
        ret.push(num % 7)
        num = Math.floor(num / 7)
    }

    return (x == -1 ? "-" : "") + (ret.reverse().join("") )
};
