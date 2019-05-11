/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    if (!nums || nums.length == 0) return ""
    
    let allzeros = true
    for (let i = 0; i < nums.length; i++){
        if (nums[i] != 0) {
            allzeros = false
            break
        }
    }

    if(allzeros) return "0" 

    let c2Arr = function(a){
        if (a < 10) return [a]
        let ret = []
        while(a > 0){
            ret.push(a % 10)
            a = Math.floor(a / 10)
        }
        return ret.reverse()
    }
    nums.sort((a, b) => {
        if(a == b) return 1
        let aa = c2Arr(a)
        let bb = c2Arr(b)
        let i = 0
        let j = 0
        let aDone = 0
        let bDone = 0
        while ( aDone == 0 || bDone == 0){
            let diff = bb[j] - aa[i]
            if (diff != 0) return diff
            i++; j++
            if(i == aa.length){
                aDone += 1
                i = 0
            }
            if(j == bb.length){
                bDone += 1
                j = 0
            }
        }

        for (let i = 0; i < aa.length - 1; i++){
            if(aa[i] > aa[i + 1]){ return bb.length - aa.length}
            else if(aa[i] < aa[i + 1]) {return aa.length - bb.length}
        }
        return b - a
    });

    return nums.join("")
};
