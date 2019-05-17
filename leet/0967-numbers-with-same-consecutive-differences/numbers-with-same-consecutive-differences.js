/**
 * @param {number} N
 * @param {number} K
 * @return {number[]}
 */
var numsSameConsecDiff = function(N, K) {
    let ret = new Set()
    let stack = []

    let bt = function(n, i){
        if (n == 0){
            let re = stack.join("")
            ret.add(Number(re))
            return
        }

        if(i >= 10 || i < 0) return

        stack.push(i)
        bt(n - 1, i + K)
        bt(n - 1, i - K)
        stack.pop()
    }

    for (let i = 1; i < 10; i++){
        bt(N, i)
    }
    
    if(N == 1) ret.add(0)

    return Array.from(ret)
};
