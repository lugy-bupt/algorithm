func hIndex(citations []int) int {
    if len(citations) == 0 {return 0}  
    
    last := len(citations) - 1
    if citations[last] == 0 {return 0}
    
    i := 0
    for i < len(citations) && citations[last - i] > i{
        i++ 
    }
    
    return i
}
