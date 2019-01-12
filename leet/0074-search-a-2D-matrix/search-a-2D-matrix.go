func searchMatrix(matrix [][]int, target int) bool {
    m := len(matrix)
    if(m == 0) {return false}
    n := len(matrix[0])
    if(n == 0) {return false}
    
    //0 - m
    ms := 0
    me := m - 1
    
    for ms < me {
        mMid := (ms + me) / 2
        
        if(matrix[mMid][n - 1] == target){
            return true
        } else if(matrix[mMid][n - 1] > target) {
            me = mMid - 1
        } else {
            ms = mMid + 1
        }
    }
    
    if(matrix[ms][n-1] < target){
        if(ms + 1 < m){
            ms = ms + 1    
        }else{
            return false
        }
    }
        
    //0 - n
    ns := 0
    ne := n - 1
    
    for ns < ne {
        nMid := (ns + ne) / 2
        
        if(matrix[ms][nMid] == target) {
            return true
        } else if (matrix[ms][nMid] > target) {
            ne = nMid - 1
        } else {
            ns = nMid + 1
        }
    }
    
    return matrix[ms][ns] == target
}
