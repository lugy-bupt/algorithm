/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    let tree = new TrieNode("")
    for (let word of words){
        tree.add(word)
    }

    let m = board.length
    let n = board[0].length
    let ret = []
    let loop = [[1,0], [-1,0], [0, 1], [0, -1]]

    let match = function(i, j, word){
        if (i < 0 || i == m || j < 0 || j == n || board[i][j] === '&'){
            return
        }

        let c = board[i][j]
        let newWord = word + c

        if(tree.search(newWord)){
            ret.push(newWord)
        }

        board[i][j] = '&';
    
        match(i, j + 1, newWord);
        match(i + 1, j, newWord);
        match(i - 1, j, newWord);
        match(i, j - 1, newWord);
        
        board[i][j] = c;
    }

    for (let i = 0; i < m; i++){
        for (let j = 0; j < n; j++){

            let stack = []
            let visited = new Set()
            match(i, j, "")
        }
    }

    return ret
};

var TrieNode = function(val){
    this.val = val
    this.finish = false
    this.child = new Map()
}

TrieNode.prototype.add = function(word){
    if (word.length == 0){
        this.finish = true
        return
    }

    let c = word[0]
    let node = this.child.get(c)

    if(!node){
        node = new TrieNode(c)
        this.child.set(c, node)
    }

    node.add(word.substr(1))
}

TrieNode.prototype.search = function(word){
    if (word.length == 0){
        return this.finish
    }

    let c = word[0]
    let node = this.child.get(c)

    if(node){
        return node.search(word.substr(1))
    }

    return false
}
