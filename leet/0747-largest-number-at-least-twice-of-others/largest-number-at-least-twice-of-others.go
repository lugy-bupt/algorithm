func dominantIndex(nums []int) int {
    length := len(nums)
    
    if length  == 0 {return -1}
    if length  == 1 {return 0}
    
    newNums := make([]int, length)
    cache := make(map[int]int)
    
    for i, num := range nums {
        if _, ok := cache[num]; !ok {
            cache[num] = i
        }
        newNums[i] = num
    }
    
    sort.Ints(newNums);
    
    largest := newNums[length - 1]
    j:= length - 1
    for j - 1 >= 0 &&  newNums[j] == newNums[j - 1] { j-- }
    j--
    if j >=0 && largest >= newNums[j] * 2 {
        return cache[largest]
    }
    
    return -1
}
