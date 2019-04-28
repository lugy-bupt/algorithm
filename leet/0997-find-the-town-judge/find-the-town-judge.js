/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    if (N == 1) return 1

    let rec = new Array(N + 1)
    for (let i = 0; i <= N; i++) rec[i] = new Array(2).fill(0)
    let maybe = []
    

    for (let i = 0; i < trust.length; i++){
        rec[trust[i][0]][0] += 1
        rec[trust[i][1]][1] += 1

        if(rec[trust[i][1]][1] == N - 1){
            maybe.push(trust[i][1])
        }
    }

    for (let i of maybe){
        if(rec[i][1] === N - 1 && rec[i][0] === 0){
            return i
        }
    }

    return -1
};
