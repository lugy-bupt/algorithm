func longestValidParentheses(s string) int {
    rs := 0
    last := -1
    stack := make([]int , 0)

    for i := 0; i < len(s); i++ {
        if(s[i] == '(') {
            stack = append(stack, i)
        } else {
            if(len(stack) == 0){
                last = i
            } else{
                stack = stack[0:len(stack) - 1]
                if len(stack) == 0 {
                    // end cal
                    temp := i - last
                    if(temp > rs) {rs = temp}
                } else{
                    temp := i - stack[len(stack) - 1]
                    if(temp > rs) {rs = temp}
                }
            }
        }
    }
    
    return rs
}
