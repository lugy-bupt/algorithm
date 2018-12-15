func romanToInt(s string) int {
    
    mapping := map[byte]int{'M': 1000,'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1}
    result := 0
    
    for i := 0; i < len(s) ; i++{
        num1 := mapping[s[i]]
        num2 := 0 
        if i < len(s) - 1 {num2 = mapping[s[i + 1]]}
        
        if num1 < num2 {
            result += num2 - num1
            i++
        } else{
            result += num1
        }
    }
    
    return result
}
