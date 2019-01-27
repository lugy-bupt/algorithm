func numSquares(n int) int {
	perfects := []int{}
	for i := 1; i*i <= n; i++ {
		perfects = append(perfects, i*i)
	}

	nums := make([]int, n+1)
	for i := 1; i < len(nums); i++ {
		nums[i] = math.MaxInt32
	}

	for _, p := range perfects {
		for i := p; i < len(nums); i++ {
			if nums[i] > nums[i-p]+1 {
				nums[i] = nums[i-p] + 1
			}
		}
	}

	return nums[n]
}
