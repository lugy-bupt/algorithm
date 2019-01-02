func hammingWeight(num uint32) int {
    rs := uint32(0)
    
    for num > 0 {
        rs += num % 2
        num = num / 2
    }
    
    return int(rs)
}
