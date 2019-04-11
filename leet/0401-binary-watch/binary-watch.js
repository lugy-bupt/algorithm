/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    if(num == 0) return["0:00"]

    const binaryWatch = [0,0,0,0,0,0,0,0,0,0]

    let ret = []

    let dfs = function(start, n){
        if ( n == 0 || start == binaryWatch.length){
            if (n == 0){
                // record ret
                let hour = parseInt(binaryWatch.slice(0,4).join(""), 2)
                if(hour >= 12) return
                let min = parseInt(binaryWatch.slice(4,10).join(""), 2)
                if(min >= 60) return
                
                ret.push(hour + ":" + (min < 10 ? "0" + min : min))
            }
            return
        }

        binaryWatch[start] = 1
        dfs(start + 1, n - 1)
        binaryWatch[start] = 0
        dfs(start + 1, n)
        return
    }
    
    dfs(0, num)

    return ret
};
