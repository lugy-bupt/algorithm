/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let m = triangle.length
    if (m == 0) return 0

    for(let i = 0; i < m; i++){
        let n = triangle[i].length
        for (let j = 0; j < n; j++){
            if (i > 0){
                if (j == 0) triangle[i][j] += triangle[i - 1][j]
                else if (j == n - 1) triangle[i][j] += triangle[i - 1][j - 1]
                else triangle[i][j] += Math.min(triangle[i - 1][j], triangle[i - 1][j - 1])
            }
        }
    }

    return Math.min.apply(null, triangle[m - 1])
};
