func lenLongestFibSubseq(A []int) int {
    if len(A) < 3 {return 0}
    
    length := 0
    
    for i := 0; i < len(A) - 2; i++ {
        for j := i + 1; j< len(A) - 1; j++ {
            first := A[i]
            second := A[j]
            singleLength := 0
            for k := j + 1; k < len(A) && first + second >= A[k]; k++ {
                if first + second == A[k] {
                    first = second
                    second = A[k]
                    singleLength += 1
                }
            }
            
            if singleLength != 0 && singleLength + 2 > length { length = singleLength + 2 }
        }
    }
    
    return length
}
