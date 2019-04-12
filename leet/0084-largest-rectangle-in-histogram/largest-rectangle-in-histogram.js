/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    if (heights.length == 0) return 0
    if (heights.length == 1) return heights[0]

    let ret = 0

    for (let i = 0; i < heights.length; i++){
        let m = heights[i]
        for (let j = i; j < heights.length; j++){
            m = Math.min(heights[j], m)
            ret = Math.max(ret, (j - i + 1) * m)
        }
    }

    return ret
};
