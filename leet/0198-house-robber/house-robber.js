/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length == 0) return 0

    let mp = new Map()
    let dp = function(i){
        if (mp.has(i)) return mp.get(i)

        let rt = -1 
        if (i == 0)  rt = nums[i]
        else if (i == 1) rt = Math.max(nums[0], nums[1])
        else rt = Math.max(dp(i - 1), dp(i - 2) + nums[i])

        mp.set(i, rt)
        return rt
    }

    for (let i = 0; i < nums.length; i++){
        dp(i)
    }

    return mp.get(nums.length - 1)
};
