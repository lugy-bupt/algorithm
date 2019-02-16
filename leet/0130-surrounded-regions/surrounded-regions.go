func solve(board [][]byte)  {
    m := len(board)
    if(m < 3) {return}
    n := len(board[0])
    if(n < 3) {return}
    
    walked := make(map[string]bool)
    for i := 0; i < m; i++ {
        for j :=0; j < n; j++ {
            if (board[i][j] == 'O'){
                // DST
                key := strconv.Itoa(i) + "_" + strconv.Itoa(j)
                if _, ok := walked[key]; !ok {
                    walker := make(map[string]bool)
                    dst(board, walker, i,j, m,n)
                    // check if can change
                    if(canChange(walker)){
                        change(board, walker)
                    }else{
                        //walked.addAll(walker)
                        for k, v := range walker{
                            walked[k] = v
                        }
                    }
                }
            }            
        }
    }
}

func canChange(walker map[string]bool) bool {
    for _, v := range walker{
        if(v) {return false}
    }
    return true
}

func change(board [][]byte, walker map[string]bool){
    for key, _ := range walker{
        // change
        a := strings.Split(key, "_")
        i, _ := strconv.Atoi(a[0])
        j, _ := strconv.Atoi(a[1])
        board[i][j] = 'X'
    }
}

func dst(board [][]byte, walker map[string]bool, i, j, m, n int){
    key := strconv.Itoa(i) + "_" + strconv.Itoa(j)
    if _, ok := walker[key]; ok {
        return;
    }
    walker[key] = (i == 0 || j == 0 || i == m - 1 || j == n - 1)
    
    if(j != 0 && board[i][j - 1] == 'O'){
         dst(board, walker, i, j - 1, m, n)
    }
    if(j != n - 1 && board[i][j + 1] == 'O'){
         dst(board, walker, i, j + 1, m, n)
    }
    if(i != 0 && board[i - 1][j] == 'O'){
         dst(board, walker, i - 1, j, m, n)
    }
    if(i != m - 1 && board[i + 1][j] == 'O'){
         dst(board, walker, i + 1, j, m, n)
    }
}
