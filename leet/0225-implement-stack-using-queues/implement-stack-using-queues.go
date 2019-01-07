type MyStack struct {
    list []int
}


/** Initialize your data structure here. */
func Constructor() MyStack {
    var stack MyStack
    stack.list = make([]int, 0)
    return stack
}


/** Push element x onto stack. */
func (this *MyStack) Push(x int)  {
    this.list = append(this.list, x)
}


/** Removes the element on top of the stack and returns that element. */
func (this *MyStack) Pop() int {
    rs := this.Top();
    this.list = this.list[0: len(this.list) - 1]
    return rs
}


/** Get the top element. */
func (this *MyStack) Top() int {
    return this.list[len(this.list) - 1]
}


/** Returns whether the stack is empty. */
func (this *MyStack) Empty() bool {
    return len(this.list) == 0
}


/**
 * Your MyStack object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Push(x);
 * param_2 := obj.Pop();
 * param_3 := obj.Top();
 * param_4 := obj.Empty();
 */
