/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    let m = matrix.length
    if (m == 0) return 0
    let n = matrix[0].length
    if (n == 0) return 0

    let ret = 0
    let getArea = function(i, j){
        if (matrix[i][j] == 0){
            return 0
        }

        let ci = i
        let jlist = []
        while(ci < m && matrix[ci][j] == 1){
            let cj = j
            while (cj < n && matrix[ci][cj] == 1){cj += 1}
            jlist.push(cj - j)
            ci += 1
        }

        //return calculate(jlist)
        let jmin = 1000000
        let area = 0
        for (let k = 0; k < jlist.length; k++){
            jmin = Math.min(jlist[k], jmin)
            area = Math.max(area, (k + 1) * jmin)
        }

        return area
    }

    for (let i = 0; i < m; i++){
        for (let j = 0; j < n; j++){
            ret = Math.max(ret, getArea(i, j))
        }
    }

    return ret    
};
