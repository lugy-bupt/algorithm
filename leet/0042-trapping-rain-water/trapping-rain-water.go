func trap(height []int) int {
    
    max_left := make([]int, len(height))
    max_right := make([]int, len(height))
    
    for i := 0; i < len(height); i++ {
        for j := i; j >= 0; j-- {
            max_left[i] = max(max_left[i], height[j])
        }
    }
    
    for i := 0; i < len(height); i++ {
        for j := i; j < len(height); j++ {
            max_right[i] = max(max_right[i], height[j])
        }
    }
    
    sum := 0
    
    for i := 0; i < len(height); i++ {
        area := min(max_left[i], max_right[i]) - height[i]
        
        if(area > 0) {
            sum += area
        }
    }
    
    return sum
}

func max(i,j int) int {
    if(i > j) {return i}
    return j
}

func min(i,j int) int {
    if(i < j) {return i}
    return j
}
