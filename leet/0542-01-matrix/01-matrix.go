func updateMatrix(matrix [][]int) [][]int {
    length := len(matrix);    
    if(length == 0) {return matrix}
    ylength := len(matrix[0])
    if(ylength == 0) {return matrix}
    
    for i := 0; i < length; i++ {
        for j := 0; j < ylength; j++ {
            if (matrix[i][j] != 0){
                matrix[i][j] = 1000
            } 
        }
    }
    
    for i := 0; i < length; i++ {
        for j := 0; j < ylength; j++ {
            minNeighbor(matrix, i, j, length, ylength)
        }
    }
    
        
    for i := length - 1; i >= 0; i-- {
        for j := ylength - 1; j >= 0; j-- {
            minNeighbor(matrix, i, j, length, ylength)
        }
    }
    
    return matrix
}

func minNeighbor(rs [][]int, x int, y int, xlength int, ylength int){
    if(x > 0) {rs[x][y] = min(rs[x][y], rs[x - 1][y] + 1)}
    if(x < xlength - 1) {rs[x][y] = min(rs[x][y], rs[x + 1][y] + 1)}
    if(y > 0) {rs[x][y] = min(rs[x][y], rs[x][y - 1] + 1)}
    if(y < ylength - 1) {rs[x][y] = min(rs[x][y], rs[x][y + 1] + 1)}
}

func min(x, y int) int{
    if (x > y) {return y}
    return x
}
