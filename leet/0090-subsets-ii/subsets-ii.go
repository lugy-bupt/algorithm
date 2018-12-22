func subsetsWithDup(nums []int) [][]int {
    rs := make([][]int, 0)
    
    if len(nums) == 0 {return rs}
    
    cache := make(map[int]int)
    rs0 := make([]int, 0)
    rs = append(rs, rs0)
    
    sort.Ints(nums)
    for _, num := range nums {
        rsx := make([][]int, 0)
        if time, ok := cache[num]; ok {
            // add
            for j, numj := range rs {
                if len(numj) > 0 && numj[len(numj) - 1] == num {
                    timeInNumj := 0
                    for k := len(numj) - 1; k >= 0; k-- {
                        if numj[k] == num {
                            timeInNumj++
                        } else { break }
                    }
                    
                    if (timeInNumj == time){
                        rsj := make([]int, len(numj))
                        copy(rsj, rs[j])
                        rsj = append(rsj, num)
                        rsx = append(rsx, rsj)
                    }
                }
            }
            
            cache[num] = time + 1
        }else{
            // add 
            cache[num] = 1
            
            for j, numj := range rs {
                rsj := make([]int, len(numj))
                copy(rsj, rs[j])
                rsj = append(rsj, num)
                rsx = append(rsx, rsj)
            }
        }
        
        rs = append(rs, rsx...)
    }
    
    return rs
}
