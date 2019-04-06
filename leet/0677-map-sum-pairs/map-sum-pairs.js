/**
 * Initialize your data structure here.
 */
var MapSum = function() {
    this.root = new TrieN("")
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    if(key == "") {
        return
    }
    this.root.insert(key, val)
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    if(prefix == ""){
        return 0
    }
    return this.root.sum(prefix)
};

var TrieN = function(key){
    this.key = key
    this.val = 0
    this.child = new Map()
}

TrieN.prototype.insert = function(key, val){
    if(key == ""){
        this.val = val
        return
    }

    let n = this.child.get(key[0])
    if (!n){
        n = new TrieN(key[0])
        this.child.set(key[0], n)
    }

    n.insert(key.substr(1), val)
}

TrieN.prototype.sum = function(prefix){
    if(prefix == ""){
        // calculate
        return this.calculate()
    }

    let n = this.child.get(prefix[0])
    if (n){
        return n.sum(prefix.substr(1))
    }else{
        return 0
    }
}

TrieN.prototype.calculate = function(){
    ret = this.val
    for(let value of this.child.values()){
        ret += value.calculate()
    }
    return ret
}

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
