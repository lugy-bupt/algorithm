/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let n = nums.length
    if(n == 0) return []

    let stack = []
    let ret = []

    let bt = function(i){
        ret.push(stack.concat())

        for (;i < n ; i++){
            stack.push(nums[i])
            bt(i + 1)
            stack.pop()
        }
    }

    bt(0)
    return ret
};
