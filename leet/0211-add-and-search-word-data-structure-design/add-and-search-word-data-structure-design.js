/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    this.root = new TrieNode("", false)
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    if(word != "") {
        this.root.addWord(word)
    }
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    if (word == ""){
        return false
    }
    return this.root.search(word)
};
    
var TrieNode = function(val, finish){
    this.val = val
    this.finish = finish
    this.children = []
};

TrieNode.prototype.addWord = function(word){
    if(word == ""){
        this.finish = true
        return
    }

    let fidx = -1
    for (let i = 0; i < this.children.length; i++){
        if (this.children[i].val == word[0]){
            fidx = i
        }
    }

    if (fidx == -1){
        let newChild = new TrieNode(word[0], false)
        this.children.push(newChild)
        newChild.addWord(word.substr(1))
    }else{
        this.children[fidx].addWord(word.substr(1))
    }
};

TrieNode.prototype.search = function(word){
    if(word == ""){
        return this.finish
    }

    if(word[0] == "."){
        for (let i = 0; i < this.children.length; i++){
            if (this.children[i].search(word.substr(1))){return true}
        }
        return false
    }else{
        let fidx = -1
        for (let i = 0; i < this.children.length; i++){
            if (this.children[i].val == word[0]){
                fidx = i
            }
        }

        if (fidx == -1){
            return false
        } else {
            return this.children[fidx].search(word.substr(1))
        }
    }
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
