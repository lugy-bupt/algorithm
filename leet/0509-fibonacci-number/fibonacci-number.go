func fib(N int) int {
    if(N < 2) {return N}
    
    rs := make([]int, N + 1)
    rs[0] = 0
    rs[1] = 1
    
    for i := 2; i <= N; i++ {
        rs[i]= rs[i-1] + rs[i-2]
    }
    
    return rs[N]
}
