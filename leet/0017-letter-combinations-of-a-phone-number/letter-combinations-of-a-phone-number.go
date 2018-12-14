func letterCombinations(digits string) []string {
    mapping := make([]string, 10)
    mapping[0] = ""
    mapping[1] = ""
    mapping[2] = "abc"
    mapping[3] = "def"
    mapping[4] = "ghi"
    mapping[5] = "jkl"
    mapping[6] = "mno"
    mapping[7] = "pqrs"
    mapping[8] = "tuv"
    mapping[9] = "wxyz"
    
    result := make([]string, 0)
    length := len(digits)
    
    if (length == 0) {return result}
    
    digitStr0 := mapping[ digits[0] - '0' ]
    for i := 0; i < len(digitStr0); i++ {
        result = append(result, string(digitStr0[i]))
    }
    
    for i := 1; i < length; i++ {    
        digitStr := mapping[ digits[i] - '0' ]
        result1 := make([]string, 0)
        
        for k := 0; k < len(result); k++ {
            for j:= 0; j < len(digitStr); j++ {
                result1 = append(result1, result[k] + string(digitStr[j]))
            }
        }
        
        result = result1
    }
    
    return result
}
