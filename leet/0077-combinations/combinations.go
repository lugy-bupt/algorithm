var rs [][]int
var stack []int

func combine(n int, k int) [][]int {
    rs = make([][]int, 0)
    stack = make([]int, 0)
    
    if (n <= 0 || k <= 0 || n < k) {return rs}
    
    nums := make([]int, n)
	for i := 0; i < n; i++{
		nums[i] = i + 1
	}
	combineArr(nums, k)
    return rs
}

func combineArr(nums []int, k int){
	if k == 0 {
		temp := make([]int, 0)
		temp = append(temp, stack...)
		rs = append(rs, temp)
        return
	}

    n := len(nums)
    
	for i := 0; i <= (n - k); i++ {
		stack = append(stack, nums[i])
		combineArr(nums[i + 1:n], k - 1)
		stack = stack[0: len(stack) - 1]
	}
}
