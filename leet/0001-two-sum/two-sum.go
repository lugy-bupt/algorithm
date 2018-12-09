func twoSum(nums []int, target int) []int {
    if nums == nil || len(nums) == 0 {
        return nil
    }
    
    var numMap = map[int]int{}
    for i, val := range nums {
        n, ok := numMap[ target - val ]
        if(ok){
            return []int{n, i}
        }else{
            numMap[val] = i
        }
    }
    
    return nil
}
