/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let m = nums.length
    if(m == 0) return []

    let stack = []
    let ret = []

    let bt = function(){
        if (stack.length == m){
            ret.push(stack.concat())
            return
        }

        for (let i of nums){
            if (stack.includes(i)) continue
            stack.push(i)
            bt()
            stack.pop()
        }
    }

    bt()
    return ret
};
