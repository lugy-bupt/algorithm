/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    if (!nums || nums.length == 0) return 0
    
    let numsMap = new Map()
    for (let i = 0; i < nums.length; i++){
        numsMap.set(nums[i], (numsMap.has(nums[i]) ? numsMap.get(nums[i]) : 0)+ 1)
    }

    let keys = [...numsMap.keys()]
    keys.sort((a, b) => a - b)
    // console.log(keys)

    let dp = new Array(keys.length)
    dp[0] = numsMap.get(keys[0]) * keys[0]
    let ret = dp[0]

    for (let i = 1; i < keys.length; i++){
        dp[i] = ((keys[i - 1] == keys[i] - 1) ? 
            Math.max(dp[i - 1], numsMap.get(keys[i]) * keys[i] + (i > 1 ? dp[i - 2] : 0)) : 
            dp[i - 1] + numsMap.get(keys[i]) * keys[i])
        ret = Math.max(ret, dp[i])
    }
    
    // console.log(dp)
    return ret
};
