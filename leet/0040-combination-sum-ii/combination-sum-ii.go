import (
    "sort"
)

var result [][]int = make([][]int, 0)
var stack []int = make([]int, 0)

func combinationSum2(candidates []int, target int) [][]int {
    result = make([][]int, 0)
    stack = make([]int, 0)
    if len(candidates) == 0 {return result}
    
    sort.Ints(candidates)
    check(candidates, target, 0)
    return result
}

func check(candidates []int, target int, start int){
    if target < 0 {return}
    if target == 0{
        r := make([]int, len(stack))
        for i, num := range stack {
            r[i] = num
        }
        result = append(result, r)
        return
    }
    
    for i := start; i < len(candidates); i++ {
        stack = append(stack, candidates[i])
        check(candidates, target - candidates[i], i + 1)
        stack = stack[:len(stack) - 1]
        
        for i + 1 < len(candidates) && candidates[i] == candidates[i + 1] {
            i++
        }
    }
}
