/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    const mp = new Array(n + 1)
    mp[0] = 1
    mp[1] = 10

    for(let i = 2; i <= n; i++){
        mp[i] = mp[i - 1] + (mp[i - 1] - mp[i - 2]) * (10 - i + 1)
    }
    return mp[n]
};
