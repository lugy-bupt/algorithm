/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const dict = new Set()
    const length = []
    const fails = new Set()

    for (let word of wordDict){
        dict.add(word)
        length.push(word.length)
    }

    length.sort((a,b) => b - a)

    let search = function(start){
        if (start == s.length) return true
        if (start > s.length) return false
        if (fails.has(start)) return false

        for (let i of length){
            let w = s.slice(start, start + i)
            if (dict.has(w) && search(start + i)) return true
        }
        fails.add(start)
        return false
    }

    return search(0)
};
