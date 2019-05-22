/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let mp = new Array(nums.length)
    let jump = function(n){
        if(n == nums.length - 1) return true
        if(mp[n] !== undefined) return mp[n]
        let num = nums[n]
        let ret = false
        for (let i = num; i > 0; i--){
            ret = ret || jump(n + i)
            if(ret) break
        }
        mp[n] = ret
        return ret
    }
    return jump(0)  
};
