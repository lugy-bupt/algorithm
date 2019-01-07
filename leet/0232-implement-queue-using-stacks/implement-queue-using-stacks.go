type MyQueue struct {
    list []int
}


/** Initialize your data structure here. */
func Constructor() MyQueue {
    var q MyQueue
    q.list = make([]int, 0)
    return q
}


/** Push element x to the back of queue. */
func (this *MyQueue) Push(x int)  {
    this.list = append(this.list, x)
}


/** Removes the element from in front of queue and returns that element. */
func (this *MyQueue) Pop() int {
    rs := this.Peek();
    this.list = this.list[1:]
    return rs
}


/** Get the front element. */
func (this *MyQueue) Peek() int {
    return this.list[0]
}


/** Returns whether the queue is empty. */
func (this *MyQueue) Empty() bool {
    return len(this.list) == 0
}


/**
 * Your MyQueue object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Push(x);
 * param_2 := obj.Pop();
 * param_3 := obj.Peek();
 * param_4 := obj.Empty();
 */
