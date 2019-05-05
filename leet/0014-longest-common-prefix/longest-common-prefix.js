/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length == 0) return ""
    if (strs.length == 1) return strs[0]

    strs.sort((a,b) => a.length - b.length)
    class Node{
        constructor(str){
            this.str = str
            this.children = new Map()
        }
        toString(){
            if(this.children.size == 1){
                return this.str + this.children.values().next().value.toString()
            }
            return this.str
        }
        parse(str){
            if(this.children.size > 1) return
            let s = str.length == 0 ? "" : str[0]

            if(!this.children.has(s)){
                this.children.set(s, new Node(s))
            }
            if(this.children.size == 1 && s != ""){
                this.children.get(s).parse(str.substr(1))
            }
        }
    }

    let trie = new Node("")

    for (let str of strs){
        trie.parse(str)
    }

    return trie.toString()
};
