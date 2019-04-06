/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = {}
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    if (word && word.length > 0){
        current = this.root
        for (let i = 0; i < word.length; i++){
            current.children = current.children || []

            let fIdx = -1
            for(let j = 0; j < current.children.length; j++){
                if(current.children[j].val == word[i]){
                    fIdx = j
                }
            }

            if(fIdx == -1){
                let child = {val: word[i]}
                current.children.push(child)
                current = child
            }else{
                current = current.children[fIdx]
            }
        }

        current.finish = true
    }
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    if (word && word.length > 0){
        current = this.root

        for (let i = 0; i < word.length; i++){
            if(!current.children || current.children.length == 0){
                return false
            }
                
            let fIdx = -1
            for(let j = 0; j < current.children.length; j++){
                if(current.children[j].val == word[i]){
                    fIdx = j
                }
            }

            if(fIdx == -1){
                return false
            }else{
                current = current.children[fIdx]
            }
        }

        return current.finish || false
    }

    return false
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    if (prefix && prefix.length > 0){
        current = this.root

        for (let i = 0; i < prefix.length; i++){
            if(!current.children || current.children.length == 0){
                return false
            }
                
            let fIdx = -1
            for(let j = 0; j < current.children.length; j++){
                if(current.children[j].val == prefix[i]){
                    fIdx = j
                }
            }

            if(fIdx == -1){
                return false
            }else{
                current = current.children[fIdx]
            }
        }

        return true
    }

    return false
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
