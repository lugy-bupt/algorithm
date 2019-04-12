/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let m = triangle.length
    if(m == 0) return 0

    for (let i = 1; i < m; i++){
        for (let j = 0; j <= i; j++){
            if(j == 0) triangle[i][j] += triangle[i - 1][j]
            else if(j == i) triangle[i][j] += triangle[i - 1][j - 1]
            else triangle[i][j] += Math.min(triangle[i - 1][j - 1], triangle[i - 1][j])
        }
    }

    return Math.min.apply(null, triangle[m - 1])
};
