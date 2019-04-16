/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    let m = nums.length
    if (m < 2) return m

    let up = 1
    let down = 1

    for (let i = 1; i < m; i++){
        if (nums[i] > nums[i - 1])
            up = down + 1
        else if (nums[i] < nums[i - 1])
            down = up + 1
    }
    return Math.max(up, down)
};
