func myPow(x float64, n int) float64 {
    if x == 0 {return 0.0}
    if n == 0 {return 1.0}
    
    nega := 1
    if (n < 0) {nega = -1}
    n = n * nega
    
    rs := pow(x, n)
    if nega == 1 {return rs}
    return 1 / rs
}

func pow(x float64, n int) float64 {
    if n == 1 {
        return x
    } else {
        a := n % 2
        r := pow(x, n/2)
        if a == 1 {return r * r * x}
        return r * r
    } 
}
