/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    let m = nums.length
    if (m < 2) return nums

    nums.sort((a, b) => a - b)

    let mp = new Array(m)
    mp[0] = [1, 0, 0]

    let dp = function(i){
        if (mp[i]) return mp[i]

        let ret = [1, i, i]
        for (let j = i - 1; j >= 0; j--){
            if(nums[i] % nums[j] == 0){
                let last = dp(j)
                if (last[0] + 1> ret[0]) ret = [last[0] + 1, j, i]
            }
        } 
        mp[i] = ret
        return ret
    }

    let ret = [1, 0, 0]
    for(let i = 1; i < m; i++){
        let rt = dp(i)
        if (rt[0] > ret[0]) ret = rt
    }

    let result = []

    while (ret){
        result.push(nums[ret[2]])
        if (ret[0] == 1) break
        ret = mp[ret[1]]

    }
    return result.reverse()
};
