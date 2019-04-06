/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dict, sentence) {
    let trie = new Trie(dict);
    return sentence.split(" ").map(word => trie.get(word)).join(" ")
};

var Trie = function(dict){
    this.root = new Node({val: ""})
    for (let i = 0; i < dict.length; i++){
        this.root.add(dict[i])
    }
};

Trie.prototype.get = function(word){
    return this.root.get(word)
};

var Node = function(val){
    this.val = val
    this.finish = false
    this.children = new Map()
};

Node.prototype.add = function(word){
    if(word == ""){
        return
    }

    let cur = this
    for (let i = 0; i < word.length; i++){
        let n = cur.children.get(word[i]);
        if(!n){
            n = new Node(word[i])
            cur.children.set(word[i], n)
        }
        cur = n

        if ( i == word.length - 1){
            n.finish = true
        }
    }
};

Node.prototype.get = function(word){
    let cur = this

    for (let i = 0; i < word.length; i++){
        let n = cur.children.get(word[i]);
        if(n){
            if(n.finish){
                return word.substring(0, i + 1)
            }
            cur = n
        }else{
            break
        }
    }
    
    return word
};
