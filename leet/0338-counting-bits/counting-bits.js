/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    let dp = [0]
    while (dp.length < num + 1){
        let dp1 = dp.map(x => x + 1)
        dp = dp.concat(dp1)
    }
    return dp.slice(0, num + 1)
};
