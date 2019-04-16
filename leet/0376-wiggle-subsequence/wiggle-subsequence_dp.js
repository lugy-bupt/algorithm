/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    let m = nums.length
    if (m < 2) return m

    let up = new Array(m).fill(1)
    let down = new Array(m).fill(1)

    for (let i = 1; i < m; i++){
        let diff = nums[i] - nums[i - 1]
        if (diff == 0){
            up[i] = up[i - 1]
            down[i] = down[i - 1]
        }else if (diff > 0){
            up[i] = down[i - 1] + 1
            down[i] = down[i - 1]
        } else{
            down[i] = up[i - 1] + 1
            up[i] = up[i - 1]
        }
    }
    return Math.max(down[m - 1], up[m - 1]);
};
