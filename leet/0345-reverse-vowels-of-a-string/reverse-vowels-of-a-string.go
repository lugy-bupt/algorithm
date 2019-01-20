func reverseVowels(s string) string {
    if (len(s) < 2) {return s}
    
    i := 0
    j := len(s) - 1
    b := []byte(s)
    
    for i < j {
        for i < j && isNotVowels(b[i]) {i++}
        for i < j && isNotVowels(b[j]) {j--}
        if(i < j) {
            b[i], b[j] = b[j], b[i]
            i++
            j--
        }
    }
    
    return string(b)
}

func isNotVowels(b byte) bool {
    return b != 'a' && b != 'e' && b != 'i' && b != 'o' && b != 'u' && b != 'A' && b != 'E' && b != 'I' && b != 'O' && b != 'U'
}
