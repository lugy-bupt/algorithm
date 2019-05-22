/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let step = 0
    let left = 0
    let right = 0
    if (nums.length == 1) return 0

    while(left <= right){
        step++
        let oldRight = right
        for (let i = left; i <= oldRight; i++){
            let newRight = i + nums[i]
            if(newRight >= nums.length - 1) return step
            if(newRight > right) right = newRight
        }
        left = oldRight + 1
    }
    return 0
};
