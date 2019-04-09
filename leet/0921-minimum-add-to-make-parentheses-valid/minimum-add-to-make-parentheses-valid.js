/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
    let ret = 0
    let counter = 0
    
    for (let i = 0; i < S.length; i++){
        if (S[i] == '('){
            counter++
        }else{
            if(counter > 0){
                counter--
            }else{
                ret++
            }
        }
    }
    
    ret += counter
    return ret
};
