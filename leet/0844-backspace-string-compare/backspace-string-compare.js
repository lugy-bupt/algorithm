/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    let removeBack = function(S){
        let stack = []

        for (let s of S){
            if(s == "#"){
                if (stack.length > 0){
                    stack.pop()
                }
            }else{
                stack.push(s)
            }
        }

        return stack.join("")
    }

    return removeBack(S) == removeBack(T)
};
