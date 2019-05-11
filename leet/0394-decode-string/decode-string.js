/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = []

    for(let i = 0; i < s.length; i++){
        let x = s[i]
        if (x == ']'){
            let str = stack.pop()
            let str1 = stack.pop()
            let num = parseInt(str1)

            while (!num){
                str = str1 + str
                str1 = stack.pop()
                num = parseInt(str1)
            }

            let n = ""
            for (let i = 0; i < num; i++){
                n += str
            }
            stack.push(n)
        } else if(x != "["){
            let code = x.charCodeAt()
            if (code > 47 && code < 58){
                let num = s[i]
                for(;i + 1 < s.length && s[i + 1].charCodeAt() > 47 && s[i + 1].charCodeAt() < 58;i++){ 
                    num += s[i + 1]
                }
                stack.push(num)
            }else{
                let char = s[i]
                for(;i + 1 < s.length && (s[i + 1].charCodeAt() < 48 || s[i + 1].charCodeAt() > 57) && s[i + 1] != "[" && s[i + 1] != "]";i++){ 
                    char += s[i + 1]
                }
                stack.push(char)
            }
        }
    }

    return stack.join("")
};
