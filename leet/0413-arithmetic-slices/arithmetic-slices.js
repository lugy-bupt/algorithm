/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
    let m = A.length
    if (m < 3) return 0

    let mp = new Map()
    let ret = 0
    for (let i = 2; i < m; i++){
        let diff0 = A[i] - A[i - 1]
        let diff1 = A[i - 1] - A[i - 2]

        if (diff1 == diff0){
            let arr = mp.get(diff1) || new Array(m).fill(0)
            mp.set(diff1, arr)
            let last = i - 1
            arr[i] = 1
            while(arr[last] != 0){
                arr[i] += 1
                last--
            }
            ret += arr[i]
        }
    }

    //console.log(mp)

    return ret
};
