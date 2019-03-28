var ret [][]int
var stack []int

func combinationSum(candidates []int, target int) [][]int {
    ret = make([][]int, 0)
    
    if len(candidates) == 0 { 
        return ret
    }
    
    stack = make([]int, 0)
    
    dfs(candidates, target)
    
    return ret
}

func dfs(cs []int, t int) {
        if t == 0 {
            xx := make([]int, len(stack))
            for i, n := range stack {
                xx[i] = n
            }
            ret = append(ret, xx)
            return 
        } else if t < 0 {
            return 
        } 
        
        for i, n := range cs {
            stack = append(stack, n)
            dfs(cs[i:], t - n)
            stack = stack[:len(stack) - 1]
        }
    }
