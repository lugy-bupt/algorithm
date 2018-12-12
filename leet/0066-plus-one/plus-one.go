plusOne(digits []int) []int {
    
    length := len(digits)
    
    add := 0
    
    for i := length - 1; i >= 0; i-- {
        result := 0
        if i == length - 1 {
            result = digits[i] + 1 + add
        } else {
            result = digits[i] + add
        }
        add = result / 10
        digits[i] = result % 10
    }
    
    if add == 0 {return digits}
    
    newDigits := make([]int, length + 1)
    newDigits[0] = 1
    for j := 0; j < length; j++ {
        newDigits[j + 1] = digits[j]
    }
    return newDigits
}
