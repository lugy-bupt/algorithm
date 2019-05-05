/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) return []

    let ret = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++){
        // loop
        let j = i + 1
        let k = nums.length - 1

        while(j < k){
            let sum = nums[i] + nums[j] + nums[k]
            if(sum == 0){
                ret.push([nums[i] , nums[j] , nums[k]])
                // ++ j
                while(j + 1 < k && nums[j] == nums[j + 1]) {j++}
                j++
                // -- k
                while(j < k - 1 && nums[k] == nums[k - 1]) {k--}
                k--
            } else if(sum < 0){
                // ++ j
                while(j + 1 < k && nums[j] == nums[j + 1]) {j++}
                j++
            } else {
                // -- k
                while(j < k - 1 && nums[k] == nums[k - 1]) {k--}
                k--
            }
        }

        while(i + 1< nums.length && nums[i] == nums[i + 1]) i += 1
    }

    return ret
};
