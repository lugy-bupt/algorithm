/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if (!intervals) return [newInterval]
    if (!newInterval) return intervals

    let ret = []

    let insert1 = function(interval){
        let last = ret[ret.length - 1]
        if(!last || interval[0] > last[1]){
            ret.push(interval)
        }else{
            ret[ret.length - 1] = [Math.min(last[0], interval[0]), Math.max(last[1], interval[1])]
        }
    }

    let i = 0
    while (i < intervals.length || newInterval) {
        if (i == intervals.length) {
            insert1(newInterval)
            newInterval = null
        } else if (!newInterval){
            insert1(intervals[i])
            i++
        } else {
            if(intervals[i][0] <= newInterval[0]){
                insert1(intervals[i])
                i++
            }else{
                insert1(newInterval)
                newInterval = null
            }
        }
    }

    return ret
};
