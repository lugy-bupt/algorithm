type NumArray struct {
    nums []int
    sums map[int]int
}


func Constructor(nums []int) NumArray {
    var n NumArray
    n.nums = nums
    
    n.sums = make(map[int]int)
    rs := 0
    for i, num := range nums {
        rs = rs + num
        n.sums[i] = rs
    }
    
    return n
}


func (this *NumArray) SumRange(i int, j int) int {
    if(i == 0) {return this.sums[j]}
    return this.sums[j] - this.sums[i - 1]
}


/**
 * Your NumArray object will be instantiated and called as such:
 * obj := Constructor(nums);
 * param_1 := obj.SumRange(i,j);
 */
