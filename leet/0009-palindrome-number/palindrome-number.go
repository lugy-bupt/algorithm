func isPalindrome(x int) bool {
    if x < 0  {return false}
    
    xx := x
    yy := 1
    
    for xx >= 10 {
        yy = yy * 10
        xx = xx / 10
    }
    
    for x > 0 {
        head := x / yy
        tail := x % 10
        if head != tail { return false }
        x = x % yy
        x = x / 10
        yy = yy / 100
    }
    
    return true
}
