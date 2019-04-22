/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if (n <= 5) {
        let x = Math.floor(n / 2)
        return (n - x) * x
    }else
    {
        let x = Math.floor(n / 3)
        let xx = n % 3
        if (xx == 1) return Math.pow(3, (x - 1)) * 4
        else if (xx == 2) return Math.pow(3, x) * xx
        return Math.pow(3, x)
    }
};
