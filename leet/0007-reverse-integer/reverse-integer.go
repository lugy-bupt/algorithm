import(
    "math"
)

func reverse(x int) int {
    if x >= 0 && x < 10 {return x}

    result := 0
    nega := 1
    
    if x < 0 {
        nega = -1
        x = 0 - x
    }
    
    for x > 0 {
        result = result * 10 + x % 10
        x = x / 10
    }
    
    if nega == -1 { result *= nega }
    if result > math.MaxInt32 || result < math.MinInt32 {result = 0}
    
    return result
}
