/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    rs = []
    map = {}
    for (i = 0; i < nums.length; i++) {
        if(map[target - nums[i]] !== undefined) {
            rs[0] = map[target - nums[i]]
            rs[1] = i
        }else{
            map[nums[i]] = i
        }
    }
    
    return rs
};
