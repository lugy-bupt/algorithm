func reverseBits(num uint32) uint32 {
    rs := uint32(0)
    n := 0
    for num > 0 {
        rs = rs * 2 + num % 2
        num = num /2
        n += 1
    }
    
    for n < 32 {
        rs *= 2
        n += 1
    }
    
    return rs
}
