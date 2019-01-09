type NumArray struct {
    nums []int
    sums []int
}


func Constructor(nums []int) NumArray {
    var n NumArray
    n.nums = nums
    n.sums = make([]int, len(nums))
    for i, num := range nums {
        if (i==0) {
            n.sums[i] = num
        } else {
            n.sums[i] = num + n.sums[i - 1]    
        }
    }
    return n
}


func (this *NumArray) Update(i int, val int)  {
    if(i < 0 || i > len(this.sums) - 1) {
        return
    }
    
    for s := i; s < len(this.sums); s++ {
        this.sums[s] = this.sums[s] + val - this.nums[i]
    }
    this.nums[i] = val
}


func (this *NumArray) SumRange(i int, j int) int {
    if(i == 0) {return this.sums[j]}
    return this.sums[j]- this.sums[i - 1]
}


/**
 * Your NumArray object will be instantiated and called as such:
 * obj := Constructor(nums);
 * obj.Update(i,val);
 * param_2 := obj.SumRange(i,j);
 */
