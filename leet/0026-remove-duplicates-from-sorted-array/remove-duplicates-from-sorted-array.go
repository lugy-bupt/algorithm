func removeDuplicates(nums []int) int {
    result := 0
    if nums == nil || len(nums) == 0 {return result}
    
    length := len(nums)
    currentNum := nums[0]
    currentIndex := 0
    
    for i, num := range nums {
        if i == 0 { continue }
        
        if( num <= currentNum){
            j := 0
            for i + j < length && nums[i + j] <= currentNum { j++ }
            if(i + j == length){return currentIndex + 1}
            
            currentIndex++
            currentNum = nums[i + j]
            nums[i] = currentNum
        }else{
            currentIndex++
            currentNum = nums[currentIndex]
        }
    }
    
    return currentIndex + 1
}

