/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if (amount == 0) return 0
    let m = coins.length
    if (m == 0) return -1

    let mp = new Array(amount + 1).fill(-1)
    mp[0] = 0

    for (let i = 1; i <= amount; i++){
        let ret = 999999
        for(let j = 0; j < m; j++){
            if (i >= coins[j] && mp[i - coins[j]] >= 0){
                ret = Math.min(ret, mp[i - coins[j]] + 1)
            }
        }
        if(ret != 999999) mp[i] = ret == 0 ? -1 : ret
    }
    //console.log(mp)
    return mp[amount]
};
