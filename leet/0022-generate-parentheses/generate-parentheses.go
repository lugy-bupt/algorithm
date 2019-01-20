var rs []string

func generateParenthesis(n int) []string {
    rs = make([]string, 0)
    var path bytes.Buffer
    if(n > 0) {generate(path, n, 0, 0)}
    return rs;
}

func generate(path bytes.Buffer, n, l, r int) {
	if  (l == n){
		b := bytes.NewBuffer(path.Bytes())
		for i := 0; i < n - r; i++ {b.WriteByte(')')}
        rs = append(rs, string(b.Bytes()))
		return
	}
	
	path.WriteByte('(')
	generate(path, n, l + 1, r);
	path.Truncate(path.Len() - 1)
	
	if(l > r) {
		path.WriteByte(')')
		generate(path, n, l, r+1)
		path.Truncate(path.Len() - 1)
	}
}
