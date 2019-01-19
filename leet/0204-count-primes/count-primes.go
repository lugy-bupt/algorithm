func countPrimes(n int) int {
    if (n < 2) {return 0}
    
    rs := 0
    
    for i := 2; i< n; i++ {
        if (isPrime(i)) {rs++}
    }
    
    return rs
}

func isPrime(n int) bool {
    sq := int(math.Sqrt(float64(n)))
    if(sq == 1) {return true}
    
    for i := 2; i <= sq; i++ {
        if (n % i == 0) {return false}
    }
    
    return true
}
