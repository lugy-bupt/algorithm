/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    if (nums.length < 2) return true
    
    let changed = 0
    let nums1 = nums.concat()
    for (let i = 0; i < nums1.length - 1; i++){
        if ( (nums1[i] > nums1[i + 1] )){
            nums1[i + 1] = nums1[i]
            changed += 1

            if(changed == 2) break
        }
    }

    if (changed < 2) return true

    changed = 0
    for (let i = nums.length - 1; i > 0; i--){
        if ( (nums[i] < nums[i - 1] )){
            nums[i - 1] = nums[i]
            changed += 1

            if(changed == 2) break
        }
    }
    
    return changed < 2
};
