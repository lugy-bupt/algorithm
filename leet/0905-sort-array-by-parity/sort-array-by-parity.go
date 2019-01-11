func sortArrayByParity(A []int) []int {
    length := len(A)
    if length < 2 {return A}
    
    rs := make([]int, length)
    i := 0
    j := len(A) - 1
    
    for _, num := range A {
        if(num % 2 == 0) {
            rs[i] = num
            i++
        }else {
            rs[j] = num
            j--
        }
    }
    
    return rs
}
