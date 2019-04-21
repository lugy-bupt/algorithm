/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    let m = nums.length
    if (m == 0) return 0

    let mp = new Map()
    let dp = function(i, s){
        let key = i + "-" + s
        if (mp.has(key)) return mp.get(key)

        let ret = 0
        if(i == 0){
            if (s == nums[i]) ret += 1
            if (s == -nums[i]) ret += 1
        }else{
            ret = dp(i - 1, s - nums[i]) + dp(i - 1, s + nums[i])
        }
        mp.set(key, ret)
        return ret
    }

    return dp(m - 1, S)
};
