func countAndSay(n int) string {
    if n == 1 {return "1"}
    
    str := countAndSay(n - 1)
    
    currentInt := str[0]
    count := 1
    result := make([]byte, 0, 60)
    
    for i := 1; i < len(str); i++ {
        if currentInt == str[i] {
            count += 1
        }else{
            result = append(result, byte(count + '0'), currentInt)
            currentInt = str[i]
            count = 1
        }
    }
    result = append(result, byte(count + '0'), currentInt)
    return string(result)
}
