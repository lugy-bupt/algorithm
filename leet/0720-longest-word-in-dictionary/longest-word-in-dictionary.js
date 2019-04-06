/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    let T = new N("")
    T.finish = true
    for (let w of words){
        T.add(w)
    }
    return T.getLongest()
};

var N = function(val){
    this.val = val
    this.finish = false
    this.child = new Map()
}

N.prototype.add = function(word){
    if (word.length == 0){
        this.finish = true
        return
    }

    let c = word[0]
    let n = this.child.get(c)

    if (!n){
        n = new N(c)
        this.child.set(c, n)
    }

    n.add(word.substr(1))
}

N.prototype.getLongest = function(){
    if (!this.finish) {return ""}
    if (this.child.size == 0) {return this.val}

    let rets = []
    for (let value of this.child.values()){
        let v = value.getLongest()
        if (v != "") {rets.push(v)}
    }

    return rets.length == 0 ? this.val : this.val + rets.sort((a, b) => {
        if (a.length != b.length) {return b.length - a.length}
        return a < b ? -1 : 1
    })[0]
}

