/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let m = prices.length
    if(m < 2) return 0

    const b = new Array(m)
    const s = new Array(m)

    b[0] = 0 - prices[0]
    s[0] = 0

    for(let i = 1; i < m; i++){
        b[i] = Math.max(b[i - 1], s[i - 1] - prices[i])
        s[i] = Math.max(s[i - 1], prices[i] + b[i - 1])
    }

    console.log(b)
    console.log(s)

    return s[m - 1]
};
