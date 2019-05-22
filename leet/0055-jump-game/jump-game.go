func canJump(nums []int) bool {
    if len(nums) < 2 {return true}
	if nums[0] == 0 {return false}
	
	result := true
	lastIndex := 0
	for i, num := range nums {
                if num == 0 && i < len(nums) - 1{
			singleResult := false
			for j := i - 1; j >= lastIndex; j-- {
				step := i - j
				if nums[j] > step { // true 
					singleResult = true
					break;
				}
			}
			
			result = result && singleResult
			
			if (!result){
				return result
			}
		}
	}
	return result
}
