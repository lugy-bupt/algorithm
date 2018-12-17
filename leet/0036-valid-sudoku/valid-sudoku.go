func isValidSudoku(board [][]byte) bool {
	for i := 0; i < 9; i++ {
		for j := 0; j < 9; j++ {
			table := make(map[byte]int)

			if board[i][j] != '.' {
				pos := board[i][j]
				_, ok := table[pos]
				if ok {
					return false
				} else {
					table[pos] = 1
				}
			}
		}
	}

	for i := 0; i < 9; i++ {
		table := make(map[byte]int)
		for j := 0; j < 9; j++ {
			if board[j][i] != '.' {
				pos := board[j][i]
				_, ok := table[pos]

				if ok {
					return false
				} else {
					table[pos] = 1
				}
			}
		}
	}

	for ii := 0; ii < 3; ii++ {
		for jj := 0; jj < 3; jj++ {
			table := make(map[byte]int)

			for i := 0; i < 3; i++ {
				for j := 0; j < 3; j++ {
					if board[ii*3+i][jj*3+j] != '.' {
						pos := board[ii*3+i][jj*3+j]
						_, ok := table[pos]
						if ok {
							return false
						} else {
							table[pos] = 1
						}
					}
				}
			}
		}
	}

	return true
}
