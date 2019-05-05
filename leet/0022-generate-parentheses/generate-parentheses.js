/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
        let stack = []
    let ret = []
    let left = 0
    let right = 0
    let dfs = function(p){
        if (left > n){
            return 
        }
        if (right > left){
            return
        }

        if (p == 2 * n){
            ret.push(stack.join(""))
            return
        }

        stack.push("(")
        left += 1
        dfs(p + 1)
        left -= 1
        stack.pop()
        stack.push(")")
        right += 1
        dfs(p + 1)
        right -= 1
        stack.pop()
    }

    dfs(0)
    return ret
};
