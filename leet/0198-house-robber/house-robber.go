var cache map[int]int

func rob(nums []int) int {
    if nums == nil || len(nums) == 0 {return 0}
    if len(nums) == 1 {return nums[0]}

    cache = make(map[int]int)
    
    rs0:=realRob(nums, 0)
    rs1:=realRob(nums, 1)
    
    return max(rs0, rs1)
}

func realRob(nums []int, start int) int{
    if v, ok := cache[start]; ok {
        return v
    }
    
    if (len(nums) - 1 == start) { return nums[start]}
    
    var rs2, rs3 int
    if (len(nums) - start > 2) {rs2 = realRob(nums, start +2)}
    if (len(nums) - start > 3) {rs3 = realRob(nums, start +3)}
    rs := nums[start] + max(rs2, rs3)
    cache[start] = rs
    return rs
}

func max(i1 int, i2 int) int {
    if(i1 > i2) {return i1}
    return i2
}
