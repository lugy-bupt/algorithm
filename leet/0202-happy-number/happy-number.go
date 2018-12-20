var cache map[int]int

func isHappy(n int) bool {
    cache = make(map[int]int)
    return check(n)
}

func check(n int) bool {
    if n == 1 {return true}
    
    if _, ok := cache[n]; ok {
        return false
    } else {
        cache[n] = 1
    }
    
    rs := 0
    
    for n != 0 {
        x := n % 10
        rs += x * x
        n = n / 10
    }
    
    return check(rs)
}
