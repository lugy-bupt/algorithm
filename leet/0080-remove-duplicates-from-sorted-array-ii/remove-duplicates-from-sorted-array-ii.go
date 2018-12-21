func removeDuplicates(nums []int) int {
    if len(nums) < 2 { return 1 }
    
    replaceNums := make([]int, 0)
    i := 0 
    for ;i < len(nums); i++ {
        if(len(replaceNums) > 0) {
            replaceNum := replaceNums[len(replaceNums) - 1]
            if ( nums[i] <= replaceNum ) {
                j := i
                for j < len(nums) && nums[j] <= replaceNum {j++}
                if j == len(nums) { return i }
                nums[i], nums[j] = nums[j], nums[i]
            }
        }
        
        if(i > 0 && nums[i] == nums[i - 1]) {
            // record replace
            replaceNums = append(replaceNums, nums[i])
        }
    }
    
    return i
}
