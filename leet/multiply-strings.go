func multiply(num1 string, num2 string) string {
    if num1 == "0" || num2 == "0" {return "0"}
    list := make([]string, 0)
    count := 0
    for i := len(num2) - 1; i >= 0; i--{
        str := mulToSingleMultiply(num1, num2[i])
        
        if(str != "0"){
            for j := 0; j < count; j++{
                str = str + "0"
            }
            list = append(list, str)
        }
        count++
    }
    
    rs := list[0]
    
    for i := 1; i < len(list); i++{
        rs = add(rs, list[i])
    }
    
    return rs
}

func add(num1, num2 string) string {
    rs := ""
    i := len(num1) - 1
    j := len(num2) - 1
    
    add := 0
    
    for i >= 0 || j >= 0 {
        b := byte('0')
        if(i >= 0) {b = num1[i]}
        c := byte('0')
        if(j >= 0) {c = num2[j]}
        
        temp := int(b - '0') + int(c - '0') + add
        add = temp / 10
        left := strconv.Itoa(temp % 10)
        rs = left + rs
        
        i--
        j--
    }
    
    if (add != 0) {
        left := strconv.Itoa(add)
        rs = left + rs
    }
    
    return rs
}

func mulToSingleMultiply(num1 string, b byte) string {
    if(b == '0') {return "0"}
    
    rs := ""
    add := 0
    for i := len(num1) - 1; i >= 0; i-- {
        temp := singleToSingleMultiply(num1[i], b) + add
        add = temp / 10
        left := strconv.Itoa(temp % 10)
        rs = left + rs
    }
    
    if (add != 0) {
        left := strconv.Itoa(add)
        rs = left + rs
    }
    
    return rs
}

func singleToSingleMultiply(b1 byte, b byte) int{
    return int(b1 - '0') * int(b - '0')
}
