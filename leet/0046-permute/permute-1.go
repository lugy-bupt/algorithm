func permute(nums []int) [][]int {
	rs := make([][]int, 0)
	if nums == nil || len(nums) == 0 {
		return rs
	}

	length := len(nums)

	if length == 1 {
		num := make([]int, 1)
		num[0] = nums[0]
		rs = append(rs, num)
	} else {
		for i := length - 1; i >= 0; i-- {
			var last []int
			if i == 0 {
				last = nums[1:]
			} else if i == length-1 {
				last = nums[:length-1]
			} else {
				nums1 := make([]int, length)
				copy(nums1, nums)
				last = append(nums1[0:i], nums1[i+1:]...)
			}

			lastResult := permute(last)

			for j := 0; j < len(lastResult); j++ {
				rs = append(rs, append(lastResult[j], nums[i]))
			}
		}
	}

	return rs
}
