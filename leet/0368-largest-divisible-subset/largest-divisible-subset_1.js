/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    let m = nums.length
    if(m == 0) return []
    nums.sort((a,b) => a - b)
    
    let mp = new Array(m)
    for(let i = 0; i < m; i++) {mp[i] = [1, [nums[i]]]}

    let ret = mp[0]

    for(let i = 1; i < m; i++){
        for(let j = i - 1; j >=0; j--){
            if(nums[i] % nums[j] == 0){                
                if(mp[i][0] < mp[j][0] + 1){
                    mp[i] = [mp[j][0] + 1, mp[j][1].concat(nums[i])]
                }
                
                if(mp[i][0] > ret[0]){
                    ret = mp[i]
                }
            }
        }
    }
    
    return ret[1]
};
