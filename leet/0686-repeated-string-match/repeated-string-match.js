/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
    let a = A.length
    let b = B.length

    if (b <= a){
        if (A.indexOf(B) != -1) return 1
        if ((A + A).indexOf(B) != -1) return 2
        return -1
    }

    let x = Math.floor(b / a)
    let str = new Array(x).fill(A).join("")
    if(str.indexOf(B) != -1) return x
    str += A
    if(str.indexOf(B) != -1) return x + 1
    str += A
    if(str.indexOf(B) != -1) return x + 2
    return -1
};
