/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
    let m = nums.length
    if (m < 2) return m 

    let visited = new Set()
    let ret = 0

    for (let i = 0; i < m; i++){
        if (visited.has(i)) continue

        let temp = 0
        let j = i
        while (!visited.has(j)){
            visited.add(j)
            j = nums[j]
            temp++
        }

        ret = Math.max(ret, temp)
    }

    return ret
};
