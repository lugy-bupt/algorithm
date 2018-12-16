import (
    "sort"
)

func threeSumClosest(nums []int, target int) int {
    
    sort.Ints(nums)
    length := len(nums)
    diff := int(^uint(0) >> 1)
    result := 0
    
    for i := 0; i < length; i++ {
        for j, k:= i + 1, length - 1; j < k; {
            sum := nums[j]+ nums[k] + nums[i]
            
            if sum == target {
                return target
            } else if sum > target{
                //record diff
                tempDiff := abs(sum-target)
                if tempDiff < diff {
                    diff = tempDiff
                    result = sum
                }
                
                // k--
                for j < k - 1 && nums[k] == nums[k - 1] {k--}
                k--
            } else{
                //record diff
                tempDiff := abs(sum-target)
                if tempDiff < diff {
                    diff = tempDiff
                    result = sum
                }
                
                // j++
                for j + 1 < k && nums[j] == nums[j + 1] {j++}
                j++
            }
        }
        
        for i + 1 < length && nums[i] == nums[i + 1] {i++}
    }
    
    return result
}

func abs(num int) int{
    if num < 0 {return 0 - num}
    return num
}
