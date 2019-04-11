/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
    let cache = new Map()

    let dfs = function(num){
        if (num == 0) return 1
        if (num == 1) return 0

        if (cache.has(num)) return cache.get(num)
        let ret = 1
        if(num % 2 == 0){
            ret += dfs(num/2) 
        }
        else{
            ret += Math.min(dfs(num + 1), dfs(num - 1))
        }
        cache.set(num, ret)
        return ret
    }

    return dfs(n)
};
