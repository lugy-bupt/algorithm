func rotate(matrix [][]int)  {
    if len(matrix) < 2 {return}

    n := len(matrix) -1

    for i := 0; i <= n/2; i++ {
        for j := i; j < n - i; j++ {
            temp := matrix[i][j]
            matrix[i][j] = matrix[n-j][i]
            matrix[n-j][i] = matrix[n-i][n-j]
            matrix[n-i][n-j] = matrix[j][n-i]
            matrix[j][n-i] = temp
        }
    }  
}
