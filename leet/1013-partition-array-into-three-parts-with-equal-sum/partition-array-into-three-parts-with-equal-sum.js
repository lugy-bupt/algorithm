/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
    let sum = 0
    for (let i of A) sum += i
    if (sum % 3 != 0) return false

    let target = sum / 3
    console.log(target)

    sum = 0
    let count = 0
    for (let i = 0; i < A.length; i++){
        sum += A[i]
        if(sum == target){
            sum = 0
            count++
        }
        if (count == 2){
            return true
        }
    }

    return false
};
