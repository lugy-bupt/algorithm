/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    let dict = new Set(wordDict)
    const length = new Set()
    const fails = new Set()

    for (let word of wordDict){
        length.add(word.length)
    }

    let ret = []
    let stack = []

    let search = function(start){
        if (start == s.length){
            ret.push(stack.concat())
            return true
        }

        if(fails.has(start)) return false

        let valid = false
        for (let i of length){
            let w = s.slice(start, start + i)
            if (dict.has(w)){
                stack.push(w)
                valid = search(start + i) || valid
                stack.pop()
            }
        }

        if(!valid) fails.add(start)
        return valid
    }

    search(0)
    return ret.map(arr => arr.join(" "))  
};
