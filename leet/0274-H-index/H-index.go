// citations[n - h] >= h

func hIndex(citations []int) int {
    if len(citations) == 0 {return 0}    

    sort.Sort(sort.Reverse(sort.IntSlice(citations)))
    if citations[0] == 0 {return 0}
    
    i := 0
    for i < len(citations) && citations[i] > i{
        i++ 
    }
    
    return i
}
