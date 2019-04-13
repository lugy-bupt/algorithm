/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let mp = new Map()

    let dp = function(i){
        if (mp.has(i)) return mp.get(i)

        let rt = 0

        for (let j = i; j >= 0; j--){
            if(nums[j] < nums[i]){
                rt = Math.max(dp(j), rt)
            }
        }

        rt += 1
        mp.set(i, rt)

        return rt
    }
    
    let ret = 0
    for (let i = 0; i < nums.length; i++) {
        ret = Math.max(ret, dp(i))
    }

    return ret
};
