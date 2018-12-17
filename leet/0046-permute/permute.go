func permute(nums []int) [][]int {
	result := make([][]int, 0)
	if nums == nil || len(nums) == 0 {
		return result
	}

	length := len(nums)
	cache := make([][][]int, length)

	for i := 0; i < length; i++ {
		r := make([][]int, 0)
		if i == 0 {
			t := make([]int, 1)
			t[0] = nums[0]
			r = append(r, t)
		} else {
			last := cache[i-1]
			for j := 0; j < len(last); j++ {
				temp := last[j]
				for k := 0; k <= len(temp); k++ {
					t := make([]int, 0)
					if k > 0 {
						t = append(t, temp[0:k]...)
					}
					t = append(t, nums[i])
					if k < len(temp) {
						t = append(t, temp[k:]...)
					}
					r = append(r, t)
				}
			}
		}
		cache[i] = r
	}

	return cache[len(cache)-1]
}
