func flipAndInvertImage(A [][]int) [][]int {
    m := len(A)
    if m == 0 {return A}
    n := len(A[0])
    
    for i := 0; i < m; i++ {
        for j1, j2 := 0, n-1; j1 < j2; {
            temp := A[i][j1]
            A[i][j1] = A[i][j2]
            A[i][j2] = temp
            j1++; j2--
        }
        
        for j := 0; j < n; j++{
            if A[i][j] == 0 {
                A[i][j] = 1
            } else {
                A[i][j] = 0
            }
        }
    }
    
    return A
}
