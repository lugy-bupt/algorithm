func arrangeCoins(n int) int {
    
    if(n < 2) {return n}
    
    k := uint(0)
    x := uint(n)
    for sum := k; sum <= x; k++{
        sum += k
    }
    
    return int(k-2)
}
