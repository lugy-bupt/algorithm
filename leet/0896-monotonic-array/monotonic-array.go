func isMonotonic(A []int) bool {
    if A == nil {return false}
    length := len(A)
    
    if length < 2 {return true}
    
    last := A[0]
    increase := 0 // 0 null 1 increase 2 decrease
    for i := 1; i < length; i++{
        for i < length && A[i] == last { i++ }
        
        if i == length {return true}
        
        if(A[i] > last){
            if increase == 0 {increase = 1}
            if increase == 2 {return false}
        } else{
            if increase == 0 {increase = 2}
            if increase == 1 {return false}
        }
        last = A[i]
    }
    
    return true
}
