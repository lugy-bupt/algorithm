func maxArea(height []int) int {
    result := 0
    length := len(height)
    
    for i, j := 0, length - 1; i < j; {
        area := 0
        
        if(height[i] > height[j]){
            area = height[j] * (j - i)
            j--
        }else{
            area = height[i] * (j - i)
            i++
        }
        
        if result < area {result = area}
    }
    
    return result
}
