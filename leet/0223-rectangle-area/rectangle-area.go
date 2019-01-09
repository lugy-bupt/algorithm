func computeArea(A int, B int, C int, D int, E int, F int, G int, H int) int {
    areaA := (C-A) * (D-B)
    areaB := (G-E) * (H-F)
    area := 0
    if(!(C < E || G < A || B > H || F > D)) {
        area = (min(C,G) - max(A,E)) * (min(D,H) - max(B,F))
    }
    
    return areaA + areaB - area
}

func min(i,j int) int{
    if(i < j) {return i}
    return j
}

func max(i,j int) int{
    if(i > j) {return i}
    return j
}
