func sortColors(nums []int)  {
    if len(nums) < 2 { return }
    quickSort(nums, 0, len(nums) - 1)
}

func quickSort(nums[] int, start int, end int){
    if start >= end { return }

    guard := nums[start]
    i, j := start, end
    for i < j{
        for i < j && nums[j] > guard {j--}
        if i < j {nums[i] = nums[j]; i++ }
        for i < j && nums[i] < guard {i++}
        if i < j {nums[j] = nums[i]; j--}
    }
    
    nums[i] = guard
    
    quickSort(nums, start, i - 1)
    quickSort(nums, i + 1, end)
}
