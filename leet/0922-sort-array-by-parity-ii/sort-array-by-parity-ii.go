func sortArrayByParityII(A []int) []int {
    
    for i, num := range A {
        if(i % 2 != num % 2){
            for j := i + 1; j < len(A); j += 2 {
                if j % 2 != A[j] % 2 {
                    // swap
                    temp := A[j]
                    A[j] = A[i]
                    A[i] = temp
                }
            }
        }
    }
    
    return A
    
}
