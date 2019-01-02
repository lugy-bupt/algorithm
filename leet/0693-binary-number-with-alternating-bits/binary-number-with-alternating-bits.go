func hasAlternatingBits(n int) bool {
    last := -1
    
    for n > 0 {
        x := n % 2
        if(x == last && last != -1) {return false}  
        last = x
        n = n / 2
    }
    
    return true
}
