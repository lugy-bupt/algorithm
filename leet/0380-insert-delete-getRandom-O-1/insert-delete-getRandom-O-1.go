import (
    "math/rand"
)

type RandomizedSet struct {
    c map[int]int
    length int
}


/** Initialize your data structure here. */
func Constructor() RandomizedSet {
    var r RandomizedSet
    r.c = make(map[int]int)
    return r
}


/** Inserts a value to the set. Returns true if the set did not already contain the specified element. */
func (this *RandomizedSet) Insert(val int) bool {
    if _, ok := this.c[val]; !ok {
        this.c[val] = 1
        this.length += 1
        return true
    }
    
    return false
}


/** Removes a value from the set. Returns true if the set contained the specified element. */
func (this *RandomizedSet) Remove(val int) bool {
    if _, ok := this.c[val]; ok {
        delete(this.c, val)
        this.length -= 1
        return true
    }
    
    return false
}


/** Get a random element from the set. */
func (this *RandomizedSet) GetRandom() int {
    rr := rand.Intn(this.length)
    
    for k, _ := range this.c {
        if( rr == 0) {
            return k
        }
        rr -= 1
    }
    
    return -1
}


/**
 * Your RandomizedSet object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.Insert(val);
 * param_2 := obj.Remove(val);
 * param_3 := obj.GetRandom();
 */
