/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
        let m = nums.length
    if (m == 0) return 0

    let mp = new Array(m)
    mp[0] = [1,1]
    let dp = function(i){
        if (mp[i]) return mp[i]
        let ret = [1, 1]
        let mx = 0
        for (let j = i - 1; j >= 0; j--){
            if (nums[j] < nums[i]){
                let last = dp(j)
                let next = last[0] + 1
                if(next> mx){
                    ret = [next, last[1]]
                    mx = next
                }else if (next == mx){
                    ret[1] += last[1]
                }
            }
        }
        mp[i] = ret
        return mp[i]
    }

    let ret = [1, 1]
    for (let i = 1; i < m; i++) {
        let r = dp(i)
        if (r[0] > ret[0]) ret = r.concat()
        else if (r[0] == ret[0]) ret[1] += r[1]
    }
    //console.log(mp)
    return ret[1]
};
