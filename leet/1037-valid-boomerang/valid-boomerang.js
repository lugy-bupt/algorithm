/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    if (!points || points.length < 3) return false
    if (points[0][0] == points[1][0] && points[0][1] == points[1][1]) return false
    if (points[0][0] == points[2][0] && points[0][1] == points[2][1]) return false
    if (points[2][0] == points[1][0] && points[2][1] == points[1][1]) return false
    
    if (points[0][0] == points[1][0] && points[0][0] == points[2][0]) return false
    if (points[0][1] == points[1][1] && points[0][1] == points[2][1]) return false

    let x0 = points[0][1] / points[0][0]
    let x1 = points[1][1] / points[1][0]
    let x2 = points[2][1] / points[2][0]

    if(x0 == x1 && x1 == x2) return false
    return true
};
