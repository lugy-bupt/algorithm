/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let board = new Array(n)
    for (let i = 0; i < n; i++) board[i] = new Array(n).fill(".")

    let checkQueens = function(i, j){
        if(board[i][j] == "Q"){
            for (let y = 0; y < n; y++){
                if (j != y && board[i][y] == "Q") return false
            }     

            for (let y = 0; y < n; y++){
                if (i != y && board[y][j] == "Q") return false
            } 

            for (let y = 1; y < n && i - y >= 0 && j - y >= 0; y++){
                if (board[i - y][j - y] == "Q") return false
            }

            for (let y = 1; y < n && i + y < n && j + y < n; y++){
                if (board[i + y][j + y] == "Q") return false
            }

            for (let y = 1; y < n && i + y < n && j - y >= 0; y++){
                if (board[i + y][j - y] == "Q") return false
            }

            for (let y = 1; y < n && i - y >=0 && j + y < n; y++){
                if (board[i - y][j + y] == "Q") return false
            }
        }

        return true
    }

    let ret = 0

    let putQueen = function(row){
        if(row == n){
            ret += 1
            return
        }

        for(let y = 0; y < n; y++){
            board[row][y] = "Q"
            if(checkQueens(row, y)) putQueen(row + 1)
            board[row][y] = "."
        }
    }

    putQueen(0)
    return ret
};
