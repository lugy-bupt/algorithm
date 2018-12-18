import "sort"

func findDuplicates(nums []int) []int {
    rs := make([]int, 0)
    if len(nums) < 2 {return rs}
    
    sort.Ints(nums)
    last := nums[0]
    for i := 1; i < len(nums); i++{
        if nums[i] == last {
            rs = append(rs, nums[i])
        }
        last = nums[i]
    }
    
    return rs
}
