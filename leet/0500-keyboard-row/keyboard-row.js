/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let set1 = new Set(['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'])
    let set2 = new Set(['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'])
    let set3 = new Set(['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'z', 'x', 'c', 'v', 'b', 'n', 'm'])

    let ret = []
    for (let w of words){
        let x 
        for (let j of w){
            if (set1.has(j)) {
                if (!x) x = set1
                else if(x != set1){
                    x = null
                    break
                }
            } 
            else if (set2.has(j)) {
                if (!x) x = set2
                else if(x != set2){
                    x = null
                    break
                }
            } 
            else if (set3.has(j)) {
                if (!x) x = set3
                else if(x != set3){
                    x = null
                    break
                }
            } 
        }

        if (x !== null){
            ret.push(w)
        } 
    }

    return ret
};
