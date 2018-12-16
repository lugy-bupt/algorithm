import (
    "sort"
)

func threeSum(nums []int) [][]int {
    result := make([][]int, 0)
    
    if nums == nil || len(nums) < 3 {return result}
    
    sort.Ints(nums)
    length := len(nums)
    for i := 0; i < length; i++ {
        for j, k:= i + 1, length - 1; j < k; {
            sum := nums[j]+ nums[k] + nums[i]
            if sum == 0 {
                r1 := make([]int, 3)
                r1[0] = nums[i]
                r1[1] = nums[j]
                r1[2] = nums[k]
                result = append(result, r1)
                
                //j++
                for j + 1 < k && nums[j] == nums[j + 1] {j++}
                j++
                //k--
                for j < k - 1 && nums[k] == nums[k - 1] {k--}
                k--
            } else if (sum > 0){
                // k--
                for j < k - 1 && nums[k] == nums[k - 1] {k--}
                k--
            } else{
                // j++
                for j + 1 < k && nums[j] == nums[j + 1] {j++}
                j++
            }
        }
        
        for i + 1 < length && nums[i] == nums[i + 1] {i++}
    }
    
    return result
}
