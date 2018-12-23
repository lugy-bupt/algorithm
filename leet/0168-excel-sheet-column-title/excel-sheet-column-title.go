func convertToTitle(n int) string {
    temp := make([]int, 0)
    
    for n != 0 {
        temp = append(temp, (n - 1) % 26)
        n = (n - 1) / 26
    }
    
    rs := make([]byte, len(temp))
    
    for i := len(temp); i > 0; i-- {
        rs[len(temp) - i] = byte(int('A') + temp[i-1])
    }
    
    return string(rs)
}
