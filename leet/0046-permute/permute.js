/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length < 2) {return [nums]}

    let ret = []
    let stack = []

    var dfs = function(n){
        if (n == nums.length){
            ret.push([].concat(stack))
            return
        }

        for (let i of nums){
            
            let found = false
            for (let j of stack){
                if(j == i){
                    found = true
                    break;
                }
            }

            if(found){
                continue;
            }

            stack.push(i)
            dfs(n + 1)
            stack.pop()
        }
    }

    dfs(0)

    return ret
};
