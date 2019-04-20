/**
 * @param {number[]} A
 * @return {number}
 */
var subarrayBitwiseORs = function(A) {
    var res = A.reduce((total, cur, index)=>{
        total[index] = new Set();
        total[index].add(cur);
        for(let item of total[index-1]){
            total[index].add(cur|item);
        }
        return total;
    }, {"-1":new Set()})
    var r = new Set();
    for(let item in res){
        res[item].forEach(r.add, r);
    }
    return r.size;
};
