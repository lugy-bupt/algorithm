const INT_MAX uint = 2147483647

func myAtoi(str string) int {
    var result uint
    notParsing := true
    nega := false
    
    for i := 0; i < len(str); i++ {
        if str[i] == ' ' && notParsing{
            continue;
        } else if (str[i] == '+' || str[i] == '-') && notParsing{
            notParsing = false
            if (str[i] == '-') {nega = true}
        } else if (str[i] >= '0' && str[i] <= '9') {
            notParsing = false
            result = result * 10 + uint( str[i] - '0' )            
            if ( nega && result >= INT_MAX + 1 ) { return ^int(INT_MAX) }
            if (!nega && result >= INT_MAX ) { return int(INT_MAX) }
        } else {
            if (result == 0) { return 0 }
            break;
        }
    }
    
    if(nega) { return 0 - int(result) }
    return int(result)
}
