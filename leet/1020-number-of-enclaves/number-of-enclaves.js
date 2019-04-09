/**
 * @param {number[][]} A
 * @return {number}
 */
var numEnclaves = function(A) {
    let m = A.length
    let n = A[0].length

    let ret = 0
    let visited = new Set()

    let dfs = function(i, j, singleV){
        let key = i + "-" + j
        if(singleV.has(key)){return}

        if (i == 0 || j == 0 || i == m - 1 || j == n - 1){
            singleV.set(key, 0)
            return
        }else{
            singleV.set(key, 1)
        }

        if (i + 1 < m && A[i + 1][j] == 1){
            dfs(i + 1, j, singleV)
        }
        if (j + 1 < n && A[i][j + 1] == 1){
            dfs(i, j + 1, singleV)
        }
        if (i - 1 >= 0 && A[i - 1][j] == 1){
            dfs(i - 1, j, singleV)
        }
        if (j - 1 >= 0 && A[i][j - 1] == 1){
            dfs(i, j - 1, singleV)
        }
    }

    for(let i = 0; i < m; i++){
        for (let j = 0; j < n; j++){
            let key = i + "-" + j
            
            if (A[i][j] == 0 || i == 0 || i == m - 1 || j == 0 || j == n - 1 || visited.has(key)){
                continue
            }

            let singleV = new Map()
            dfs(i,j, singleV)

            let foundBound = false
            for (let item of singleV){
                visited.add(item[0])
                if(item[1] == 0){
                    foundBound = true
                }
            }
            
            if(!foundBound){
                ret += singleV.size
            }
        }
    }

    return ret
};
