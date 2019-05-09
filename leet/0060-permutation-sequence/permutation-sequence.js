/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let nums = new Array(n)
    let prod = 1
    for (let i = 0; i < n; i++) {
        nums[i] = i + 1
        prod *= Math.max(i, 1)
    }

    k = k - 1
    let ret = []
    for(let i = n - 1; i > 0; i--){
        let x = Math.floor(k / prod)
        ret.push(nums[x])
        nums.splice(x, 1)
        k = k % prod
        prod /= i
    }

    ret = ret.concat(nums)

    return ret.join("")
};
