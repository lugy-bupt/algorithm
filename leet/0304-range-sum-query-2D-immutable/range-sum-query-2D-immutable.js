/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.matrix = matrix
    let m = this.matrix.length
    if (m == 0) return
    let n = this.matrix[0].length
    if (n == 0) return

    for (let i = 0; i < m; i++){
        for (let j = 0; j < n; j++){
            this.matrix[i][j] += (i > 0 ? this.matrix[i - 1][j] : 0) + (j > 0 ? this.matrix[i][j - 1] : 0) - ((i > 0 && j > 0) ? this.matrix[i - 1][j - 1] : 0)
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    return this.matrix[row2][col2] - (row1 > 0 ? this.matrix[row1 - 1][col2] : 0) - (col1 > 0 ? this.matrix[row2][col1 - 1] : 0) + ((row1 > 0 && col1 > 0) ? this.matrix[row1 - 1][col1 - 1] : 0) 
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
