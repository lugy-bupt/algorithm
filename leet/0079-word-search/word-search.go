var stack []BYTE

func exist(board [][]byte, word string) bool {
    if len(board) == 0 {return false}
    
    stack = make([]BYTE, 0)
    li := len(board)
    lj := len(board[0])

    for i := 0; i < li; i++ {
        for j := 0; j < lj; j++ {
            result := check(board, i, j, word)
	        if (result) {return true}
        }
    }
    
    return false
}

func check(board [][]byte, i int, j int, word string) bool {
    li := len(board)
    lj := len(board[0])
    lstack := len(stack)

    if lstack == len(word){return true}
    if i < 0 || i == li || j < 0 || j == lj || stackContains(i,j) {return false}
    if word[lstack] != board[i][j] {return false}

    stack = append(stack, BYTE{b:word[lstack], i:i, j:j})
    rs := check(board, i + 1, j, word) || check(board, i, j + 1, word) || check(board, i - 1, j, word) || check(board, i, j - 1, word)
    
    stack = stack[0:lstack]
    return rs
}

func stackContains(i int, j int) bool{
    for _, b := range stack {
	    if i == b.i && j == b.j  {return true}
    }
    return false
}

type BYTE struct {
    b byte
    i int
    j int
}
