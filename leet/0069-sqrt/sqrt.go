func mySqrt(x int) int {
    
    if x < 2 {
        return x
    } else if x < 4 {
        return 1
    } else if x < 9 {
        return 2
    }
    
    a := x / 2
    for a * a > x { a = a / 2 }
    
    i := a
    for i * i <= x && i < 2 * a { i++ }
    
    return i - 1
}
