func search(nums []int, target int) int {
    if len(nums) == 0 {return -1}
    
    start := 0
    end := len(nums) - 1
    
    return searchWithStartEnd(nums, start, end, target);
}

func searchWithStartEnd(nums []int, start int, end int, target int) int {
    if start == end {
        if nums[start] == target {return start}
        return -1
    }
    
    if nums[start] < nums[end] {
        return binarySearch(nums, start, end, target)
    } else {
        mid := (start + end) / 2
        if nums[mid] == target {
            return mid
        } else if nums[mid] > nums[end] {
            result1 := binarySearch(nums, start, mid - 1, target)
            result2 := searchWithStartEnd(nums, mid + 1, end, target)
            
            if result1 != -1 {return result1}
            if result2 != -1 {return result2}
            return -1
        } else {
            result1 := searchWithStartEnd(nums, start, mid - 1, target)
            result2 := binarySearch(nums, mid + 1, end, target)
            
            if result1 != -1 {return result1}
            if result2 != -1 {return result2}
            return -1
        } 
    }
    
    return -1
}

func binarySearch(nums []int, start int, end int, target int) int{
    for start < end {
        mid := (start + end) / 2
        if nums[mid] == target {
            return mid
        } else if nums[mid] < target {
            start = mid + 1
        } else{
            end = mid - 1
        }
    }
    
    if nums[start] == target {return start}
    return -1
}
