func isOneBitCharacter(bits []int) bool {
    if bits[len(bits) - 1] == 1 {return false}
    
    for i := 0; i < len(bits); {
        if i == len(bits) - 1 { return true }
        
        if bits[i] == 1 {i++}
        i++
    }
    
    return false
}
