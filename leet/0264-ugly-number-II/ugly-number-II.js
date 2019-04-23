/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    if (n == 1) return 1

    let cur = 0
    let counter = 0
    let stack2 = []
    let stack3 = []
    let stack5 = []

    while (counter < n){
        if (cur == 0){
            cur = 1
        }else{
            let c2 = stack2[0]
            let c3 = stack3[0]
            let c5 = stack5[0]

            let m = Math.min(c2, Math.min(c3, c5))
            if (m == c2) stack2.shift()
            if (m == c3) stack3.shift()
            if (m == c5) stack5.shift()

            cur = m
        }

        counter++

        stack2.push(cur * 2)
        stack3.push(cur * 3)
        stack5.push(cur * 5)
    }

    return cur
};
