/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let biSearch = function(s, e){
        while(s < e){
            let m = Math.floor((s + e) / 2)
            if (nums[m] == target){
                return true
            } else if(nums[m] < target){
                s = m + 1
            } else{
                e = m - 1
            }
        }

        return nums[s] == target
    }

    let div = -1

    for (let i = 1; i < nums.length; i++){
        if(nums[i] < nums[i - 1]) {
            div = i
            break
        }
    }


    if(div == -1){
        return biSearch(0, nums.length - 1)
    } else{
        if (target == nums[0]){
            return true
        } else if (target > nums[0]){
            return biSearch(0, div - 1)
        } else{
            return biSearch(div, nums.length - 1)
        }
    }
};
