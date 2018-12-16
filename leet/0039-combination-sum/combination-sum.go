import "sort"

func combinationSum(candidates []int, target int) [][]int {
    if len(candidates) == 0 {return [][]int{}}
    
    sort.Ints(candidates)
    
    return combinationSumWithStart(candidates, 0, target)
}

func combinationSumWithStart(candidates []int, start int, target int) [][]int {
    result := make([][]int, 0)
    
    for i := start; i < len(candidates); i++ {
        x := make([]int, 1)
        x[0] = candidates[i]
        
        n := target - candidates[i]
        if n == 0 {
            result = append(result, x)
            break;
        } else if n < 0 {
            break;
        }
        
        tempResult := combinationSumWithStart(candidates, i, n)
        
        if len(tempResult) > 0 {
            for j := 0; j < len(tempResult); j++ {
                result = append(result, append(x, tempResult[j]...))
            }
        }
    }
    
    return result
}
