type RLEIterator struct {
    A []int
}


func Constructor(A []int) RLEIterator {
    var r RLEIterator
    r.A = A
    return r
}


func (this *RLEIterator) Next(n int) int {
    if(len(this.A) < 2) {
        if(n > 0) {
            return -1
        }
    }
    
    time := this.A[0]
    num := this.A[1]
    
    if (n < time) {
        this.A[0] = time - n
        return num
    } else if(n == time) {
        this.A = this.A[2:]
        return num
    } else {
        this.A = this.A[2:]
        return this.Next(n - time)
    }
}


/**
 * Your RLEIterator object will be instantiated and called as such:
 * obj := Constructor(A);
 * param_1 := obj.Next(n);
 */
