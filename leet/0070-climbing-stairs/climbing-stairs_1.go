func climbStairs(n int) int {
    if n <= 2 {return n}
    // return climbStairs(n - 1) + climbStairs(n - 2)
    
    list := make([]int, n + 1)
    list[0] = 0
    list[1] = 1
    list[2] = 2
    
    for i := 3; i <= n; i++ {
        list[i] = list[i - 1] + list[i - 2]
    }
    
    return list[n]
}
