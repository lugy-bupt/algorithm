/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let m = matrix.length
    if(m == 0) return 0
    let n = matrix[0].length
    if(n == 0) return 0

    let ret = 0

    for (let i = 0; i < m; i++){
        for (let j = 0; j < n; j++){
            if (matrix[i][j] == 0) {continue}
            let curi = i
            let curj = j
            let valid = true

            while (curi < m && curj < n && matrix[curi][curj] == 1){
                let pj = j

                while (pj < curj){
                    if (matrix[curi][pj] == 0){
                        valid = false
                        break
                    }
                    pj += 1
                }

                if(!valid) {
                    break
                }

                let pi = i

                while (pi < curi){
                    if (matrix[pi][curj] == 0){
                        valid = false
                        break
                    }
                    pi += 1
                }

                if(!valid) {
                    break
                }else{
                    ret = Math.max(ret, curi - i + 1)
                }

                curi += 1
                curj += 1
            }
        }
    }

    return ret * ret
};
