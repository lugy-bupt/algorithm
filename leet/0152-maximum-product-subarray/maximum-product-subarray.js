/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let mp = new Array(nums.length)
    let mp1 = new Array(nums.length)
    mp[0] = nums[0]
    mp1[0] = nums[0]

    let ret = mp[0]

    for (let i = 1; i < nums.length; i++){
        mp[i] = Math.max(nums[i], Math.max(nums[i] * mp[i - 1], nums[i] * mp1[i - 1]))
        mp1[i] = Math.min(nums[i], Math.min(nums[i] * mp[i - 1], nums[i] * mp1[i - 1]))
        ret = Math.max(ret, mp[i])
    }

    return ret
};
