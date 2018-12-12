func addBinary(a string, b string) string {
    
    lenA := len(a)
    lenB := len(b)
    
    result := ""
    add := 0
    
    for i, j := lenA - 1, lenB - 1; i >=0 || j >= 0 || add == 1; {
        numA := '0'
        numB := '0'
        
        if i >= 0 { numA = rune(a[i]) }
        if j >= 0 { numB = rune(b[j]) }
        
        newNum := int(numA - '0') + int(numB - '0') + add
        add = newNum / 2
        result = string(newNum % 2 + '0') + result
        
        i-- 
        j-- 
    }
    
    return result
}
