func findShortestSubArray(nums []int) int {
    cache := make(map[int][]int)
    for i, num := range nums{
        v, ok := cache[num]
        if !ok { 
            v = make([]int, 3) 
            cache[num] = v
        }
        
        v[0] = v[0] + 1
        if(v[0] == 1){
            v[1] = i
        } else {
            v[2] = i
        }
    }
    
    max := 0
    var chars map[int]int
    for k, v := range cache {
        if( v[0] > max ) {
            chars = make(map[int]int)
            chars[k] = v[2] - v[1] + 1
            max = v[0]
        } else if (v[0] == max) {
            chars[k] = v[2] - v[1] + 1
        }
    }
    
    rs := 0
    for _, v := range chars {
        if(v > 0 && (rs == 0 || rs > v)) {
            rs = v
        }
    }
    return rs
}
