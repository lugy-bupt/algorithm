/**
 * @param {number[][]} A
 * @return {number}
 */
var minFallingPathSum = function(A) {
    let m = A.length
    if(m == 0) return 0
    let n = A[0].length
    if(n == 0) return 0

    for (let i = 1; i < m; i++){
        for (let j = 0; j < n; j++){
            let last = []
            if(j > 0) last.push(A[i - 1][j - 1])
            last.push(A[i - 1][j])
            if(j < n - 1) last.push(A[i - 1][j + 1])
            A[i][j] = A[i][j] + Math.min.apply(null, last)
        }
    }
    
    return Math.min.apply(null, A[m - 1])   
};
