/**
 * DP will be "over time".
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let mp = new Array(nums.length).fill(99999)
    mp[0] = 0

    let dp = function(n){
        let x = nums[n]
        for (let i = n + 1; i < nums.length && i <= n + x ; i++){
            mp[i] = Math.min(mp[i], mp[n] + 1)
        }
    }

    for(let i = 0; i < nums.length; i++) dp(i)
    return mp[mp.length - 1]
};
