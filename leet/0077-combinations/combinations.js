/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    if(n == 0 || k == 0) return []

    let nums = new Array(n)
    for (let i = 0; i < n; i++) nums[i] = i + 1

    let stack = []
    let ret = []

    let bt = function(i){
        if (stack.length == k){
            ret.push(stack.concat())
            return
        }

        for (;i < n ; i++){
            stack.push(nums[i])
            bt(i + 1)
            stack.pop()
        }
    }

    bt(0)
    return ret
};
