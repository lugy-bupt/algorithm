func setZeroes(matrix [][]int)  {
    zero := make([]int, 0)
    zeroj := make([]int, 0)
    
    for i,list := range matrix {
        for j,num := range list{
            if num == 0 {
                zero = append(zero, i)
                zeroj = append(zeroj, j)
            }
        }
    }
    
    for _, z := range zero {
        for j := 0; j < len(matrix[0]); j++{
            matrix[z][j] = 0
        }
    }
    
    for _, z := range zeroj {
        for i := 0; i < len(matrix); i++ {
            matrix[i][z] = 0
        }
    }
}
