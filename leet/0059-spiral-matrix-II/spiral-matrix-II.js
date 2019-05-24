/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let limit = n * n
    let ret = new Array(n)
    for (let i = 0; i < n; i++) ret[i] = new Array(n).fill(0)

    let i = 1        
    let x = 0
    let y = 0

    while ( i <= limit ){
        while(x >= 0 && x < n && ret[y][x] == 0){
            ret[y][x] = i
            i++
            x++
        }

        x -= 1
        y += 1

        while(y >= 0 && y < n && ret[y][x] == 0){
            ret[y][x] = i
            i++
            y++
        }

        y -= 1
        x -= 1

        while(x >= 0 && x < n && ret[y][x] == 0){
            ret[y][x] = i
            i++
            x--
        }

        x += 1
        y -= 1

        while(y >= 0 && y < n && ret[y][x] == 0){
            ret[y][x] = i
            i++
            y--
        }

        x += 1
        y += 1
    }

    return ret
};
