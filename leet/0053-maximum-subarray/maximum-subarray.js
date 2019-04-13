/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length == 0) return 0

    let ret = nums[0];
    let mp = new Map()

    let dp = function(i){
        if (i == 0) return nums[0]
        if (mp.has(i)) return mp.get(i)
        let r = Math.max(nums[i], dp(i - 1) + nums[i])
        mp.set(i, r)
        return r
    }

    for (let i = 1; i < nums.length; i++){
        ret = Math.max(ret, dp(i))
    }

    return ret    
};
