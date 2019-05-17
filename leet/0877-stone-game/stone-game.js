/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    let mp = new Map()
    let dp = function(l, r){
        if (l == r - 1) return piles[l] > piles[r] ? piles[l] - piles[r] : piles[r] - piles[l]
        let key = l + "-" + r
        if (mp.has(key)) return mp.get(key)

        let ret = Math.max(piles[l] - dp(l + 1, r), piles[r] - dp(l, r - 1))
        mp.set(key, ret)
        return ret 
    }

    let ret = dp(0, piles.length - 1)
    // console.log(mp)
    return ret > 0
};
