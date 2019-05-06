/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let m = nums.length
    if(m == 0) return 0

    let mp = nums.concat()
    let ret = mp[0]
    for (let i = 1; i < m; i++){
        mp[i] = Math.max(mp[i], mp[i] + mp[i - 1])
        ret = Math.max(ret, mp[i])
    }
    return ret
};
