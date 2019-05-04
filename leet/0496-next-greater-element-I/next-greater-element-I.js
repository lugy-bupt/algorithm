/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    if (nums1.length == 0 || nums2.length == 0) return [] 
    
    let ret = []
    let map = new Map()
    
    let stack = []
        
    for(let j = nums2.length - 1; j >= 0; j--){
        while (stack.length > 0 && stack[stack.length - 1] <= nums2[j]) {stack.pop()}
        if (stack.length == 0) map.set(nums2[j], -1)
        else map.set(nums2[j], stack[stack.length - 1])
        stack.push(nums2[j])
    }
    
    for (let i of nums1){
        ret.push(map.get(i))
    }
    
    return ret
};
