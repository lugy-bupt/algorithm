/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let cache = new Map()
    for(let i of nums){cache.set(i, 1)}

    let rt = 0
    let tempRt = 0

    let dfs = function(n, delta){
        if(cache.has(n)){
            tempRt += 1
            cache.delete(n)
            dfs(n + delta, delta)
        }
    }

    for(let i of nums){
        tempRt = 0
        dfs(i, -1)
        dfs(i + 1, 1)
        rt = Math.max(rt, tempRt)
    }

    return rt
};
