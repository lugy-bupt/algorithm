/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    if (!nums || nums.length == 0) return nums

    let num1 = nums.concat()
    num1.sort((a, b) => b - a)
    
    let map = new Map()
    for (let i = 0; i < num1.length; i++){
        map.set(num1[i], i + 1)
    }

    console.log(map)

    for (let i = 0; i < nums.length; i++){
        let ret = map.get(nums[i])

        if (ret == 1) nums[i] = "Gold Medal"
        else if (ret == 2) nums[i] = "Silver Medal"
        else if (ret == 3) nums[i] = "Bronze Medal"
        else nums[i] = ret + ""
    }

    return nums
};
