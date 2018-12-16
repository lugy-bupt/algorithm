import (
    "sort"
)

func fourSum(nums []int, target int) [][]int {
    result := make([][]int, 0)
    
    if nums == nil || len(nums) < 4 {return result}
    
    sort.Ints(nums)
    length := len(nums)
    
    for i := 0; i < length; i++ {
        for l := i + 1; l < length; l++ {
            for j, k:= l + 1, length - 1; j < k; {
                sum := nums[j]+ nums[k] + nums[i] + nums[l]
                if sum == target {
                    r1 := make([]int, 4)
                    r1[0] = nums[i]
                    r1[1] = nums[l]
                    r1[2] = nums[j]
                    r1[3] = nums[k]
                    result = append(result, r1)

                    //j++
                    for j + 1 < k && nums[j] == nums[j + 1] {j++}
                    j++
                    //k--
                    for j < k - 1 && nums[k] == nums[k - 1] {k--}
                    k--
                } else if (sum > target){
                    // k--
                    for j < k - 1 && nums[k] == nums[k - 1] {k--}
                    k--
                } else{
                    // j++
                    for j + 1 < k && nums[j] == nums[j + 1] {j++}
                    j++
                }
            }
            
            for l + 1 < length && nums[l] == nums[l + 1] {l++}
        }
        
        for i + 1 < length && nums[i] == nums[i + 1] {i++}
    }
    
    return result
}
