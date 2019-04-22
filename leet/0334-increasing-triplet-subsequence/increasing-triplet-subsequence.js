/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let m = nums.length
    if (m < 3) return false

    let mp = new Array(2)
    mp[0] = nums[0]

    for (let i = 1; i < m; i++){
        if (nums[i] <= mp[0]) mp[0] = nums[i]
        else{
            if (mp[1] === undefined) mp[1] = nums[i]
            else {
                if (nums[i] > mp[1]) return true
                else mp[1] = nums[i]
            }
        }
    }

    return false
};
