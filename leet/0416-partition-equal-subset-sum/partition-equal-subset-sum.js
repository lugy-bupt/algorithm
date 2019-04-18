/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let mp = new Map()
    let dp = function(i, j){
        if(i == 0) return j == nums[0] || j == -nums[0]

        let key = i + '-' + j
        if (mp.has(key)) return mp.get(key)

        let ret = dp(i - 1, j - nums[i]) || dp(i - 1, j + nums[i])
        mp.set(key, ret)
        return ret
    }
    
    return dp(nums.length - 1, 0)
};
