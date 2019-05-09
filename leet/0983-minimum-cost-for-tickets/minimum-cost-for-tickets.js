/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    if (days.length == 0) return 0

    let last = days[days.length - 1]
    let mp = new Array(last + 1).fill(0)

    for (let i = 1; i < mp.length; i++){
        if (days.includes(i)){
            let ret = mp[i - 1] + costs[0]
            ret = Math.min(ret, i >= 7 ? mp[i - 7] + costs[1] : costs[1])
            ret = Math.min(ret, i >= 30 ? mp[i - 30] + costs[2] : costs[2])
            mp[i] = ret
        }else{
            mp[i] = mp[i - 1]
        }
    }

    return mp[mp.length - 1]
};
