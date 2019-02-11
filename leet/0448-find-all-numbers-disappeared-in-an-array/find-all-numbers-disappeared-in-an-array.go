func findDisappearedNumbers(nums []int) []int {
	for i := 0; i < len(nums); i++ {
		for nums[i] != nums[nums[i]-1] {
			nums[i], nums[nums[i]-1] = nums[nums[i]-1], nums[i]
		}
	}

	rs := make([]int, 0)

	for i, n := range nums {
		if n != i+1 {
			rs = append(rs, i+1)
		}
	}

	return rs
}
