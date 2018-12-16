func isToeplitzMatrix(matrix [][]int) bool {
    if len(matrix) == 0 {return true}
    
    length := len(matrix)
    ylength := len(matrix[0])
    
    for i := 0; i < length - 1; i++{
        r1 := matrix[i]
        r2 := matrix[i + 1]
        
        for j:= 0; j< ylength - 1; j++ {
            if r1[j] != r2[j + 1] {
                return false
            }
        }
    }
    
    return true
}
