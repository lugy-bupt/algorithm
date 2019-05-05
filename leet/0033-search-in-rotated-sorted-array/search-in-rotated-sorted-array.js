/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
        if (nums.length == 0) return -1
    if (nums.length == 1) return nums[0] == target ? 0 : -1

    let idx = -1
    for(let i = 0 ; i < nums.length - 1; i++){
        if (nums[i] > nums[i + 1]) {
            idx = i
            break
        }
    }

    let find = function(start, end){
        while(start < end){
            let mid = Math.floor((start + end) / 2)
            if(nums[mid] == target){
                return mid
            }else if(nums[mid] < target){
                start = mid + 1
            }else{
                end = mid - 1
            }
        }
        return (nums[start] == target) ? start : -1
    }

    if (idx == -1){
        return find(0, nums.length - 1)
    }else{
        if (target == nums[0]){
            return 0
        }else if (target > nums[0]){
            return find(0, idx)
        }else{
            return find(idx + 1, nums.length - 1)
        }
    }
};
