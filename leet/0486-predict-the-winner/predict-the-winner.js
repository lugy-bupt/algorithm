/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
    if (nums.length < 2) return true

    let mp = new Map()
    let dp = function(l, r){
        if (l == r) return nums[l]

        let key = l + "-" + r
        if (mp.has(key)) return mp.get(key)

        let ret = Math.max(nums[l] - dp(l + 1, r), nums[r] - dp(l, r - 1))
        mp.set(key, ret)
        return ret
    }

    let start = 0
    let end = nums.length - 1

    return dp(start, end) >= 0
};
