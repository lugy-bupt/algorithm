/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if(nums.length == 0) return 0
    
    let mp = new Array(nums.length).fill(1)
    let ret = 1

    for (let i = 1; i < nums.length; i++){
        for (let j = i - 1; j >= 0; j--){
            if (nums[j] < nums[i]){
                mp[i] = Math.max(mp[i], mp[j] + 1)
                ret = Math.max(ret, mp[i])
            }
        }
    }
    console.log(mp)
    return ret
};
