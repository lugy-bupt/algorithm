/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let address = []
    let ret = []

    let getIpAddress = function(st, num){
        if (num == 4){
            if(st == s.length) ret.push(address.join("."))
            return
        }

        if(s[st] == "0"){
            address.push(0)
            getIpAddress(st + 1, num + 1)
            address.pop()
        }else{
            for(let i = 1; i <= 3; i++){
                let x = s.substring(st, st + i) * 1
                if(x > 255) continue

                address.push(x)
                getIpAddress(st + i, num + 1)
                address.pop()
            }
        }
    }

    getIpAddress(0, 0)

    return ret
};
