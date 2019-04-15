/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    if (nums.length == 0) return 0
    
    nums.sort((a, b) => a - b)
    let mp = new Map()

    let dp = function(n){
        if(n < nums[0]) return 0
        if(n == nums[0]) return 1
        if(mp.has(n)) return mp.get(n)
        let rt = 0
        for (let j = nums[0]; j <= n; j++){
            if(nums.includes(n - j)) rt += dp(j)
        }
        if(nums.includes(n)) rt += 1
        mp.set(n, rt)
        return rt
    }

    for(let i = 1; i <= target; i++) dp(i)
    console.log(mp)
    return dp(target) 
};
