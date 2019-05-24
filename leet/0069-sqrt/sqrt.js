/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) return x

    let sqrt = function(s, e){
        while(s < e){
            let m = Math.floor((s + e) / 2)
            let p = m * m
            if (p == x){
                return m
            } else if(p < x){
                if ((m + 1) * (m + 1) > x) return m
                s = m + 1 
            } else{
                e = m - 1
            }
        }

        return s

    }

    return sqrt(1, x)
};
