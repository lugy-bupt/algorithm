import (
    "container/list"
)

func isValid(s string) bool {
    
    if len(s) == 0 {return true}
    
    stack := list.New()
    
    for i := 0; i < len(s); i++ {
        char := s[i]
        if char == '(' || char == '[' || char == '{'  {
            stack.PushBack(char)
        }
        if char == ')' || char == ']' || char == '}' {
            if stack.Len() > 0 {
                backEle := stack.Back()
                back := backEle.Value.(byte)
                if ( char == ')' && back != '(' ) || (char == ']' && back != '[') || (char == '}' && back != '{') {
                    return false
                }
                stack.Remove(backEle)
            }else{
                return false
            }
        }
    }
    
    if stack.Len() == 0 { return true }
    return false    
}
