/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if(!wordList || !wordList.includes(endWord)) return 0

    let canChange = function(a, b){
        if(a.length != b.length) return false
        let diff = false
        for(let i = 0; i < a.length; i++){
            if(a[i] != b[i]){
                if(diff) return false
                diff = true
            }
        }
        return diff
    }

    let endIndex = wordList.findIndex((w) => w == endWord)

    let mp = new Map()
    mp.set(beginWord, 1)
    let list = [beginWord]

    while(list.length > 0){
        let w = list.shift()
        if(w == endWord) return mp.get(w)

        for(let i = 0; i < wordList.length; i++){
            if(!mp.has(wordList[i]) && canChange(w, wordList[i])) {
                mp.set(wordList[i], mp.get(w) + 1) 
                list.push(wordList[i])
            }
        }
    }

    return 0
};
