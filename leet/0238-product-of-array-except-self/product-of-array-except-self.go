func productExceptSelf(nums []int) []int {
    rs := make([]int, len(nums))
    
	for i := len(nums) - 1; i >= 0; i-- {
		if i == len(nums)-1 {
			rs[i] = 1
		} else {
			rs[i] = rs[i + 1] * nums[i+1]
		}
	}
    
	p := 1
	for j := 0; j < len(nums); j++ {
		if j > 0 {
			p *= nums[j - 1]
			rs[j] = rs[j] * p
		}
	}
	return rs
    
}
