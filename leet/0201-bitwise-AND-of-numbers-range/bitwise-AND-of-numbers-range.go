func rangeBitwiseAnd(m int, n int) int {
    if m == 0 { return 0 }
    if m == n { return m }
    if m == ^n { return 0 }
    
    rs := m
    
    for i := m + 1; i <= n; i++{
        rs = rs & i;
        
        if (rs == 0) {break}
    }
    
    return rs
}
