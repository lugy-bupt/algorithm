/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function(price, special, needs) {
        if (!needs || needs.length == 0) return 0

    let mp = new Map()

    let dp = function(needs){
        let key = needs.join("-")
        if (mp.has(key)) return mp.get(key)

        let ret = 0
        for (let i = 0; i < needs.length; i++) ret += price[i] * needs[i]

        for (let i = 0; i < special.length; i++){
            let newNeed = needs.concat()
            let valid = true
            for (let j = 0; j < newNeed.length; j++) {
                newNeed[j] -= special[i][j]
                if (newNeed[j] < 0){
                    valid = false
                    break
                }
            }
            if (!valid) continue

            ret = Math.min(ret, special[i][special[i].length - 1] + dp(newNeed))
        }

        mp.set(key, ret)
        return ret
    }

    let ret = dp(needs)
    return ret
};
