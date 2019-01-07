type MyCircularDeque struct {
    list []int
    k int
}


/** Initialize your data structure here. Set the size of the deque to be k. */
func Constructor(k int) MyCircularDeque {
    return MyCircularDeque{list: make([]int, 0), k: k}
}


/** Adds an item at the front of Deque. Return true if the operation is successful. */
func (this *MyCircularDeque) InsertFront(value int) bool {
    if(this.IsFull()) {return false}
    rs := []int{value}
    this.list = append(rs, this.list...)
    return true
}


/** Adds an item at the rear of Deque. Return true if the operation is successful. */
func (this *MyCircularDeque) InsertLast(value int) bool {
    if(this.IsFull()) {return false}
    this.list = append(this.list, value)
    return true
}


/** Deletes an item from the front of Deque. Return true if the operation is successful. */
func (this *MyCircularDeque) DeleteFront() bool {
    if(this.IsEmpty()) {return false}
    this.list = this.list[1:]
    return true
}


/** Deletes an item from the rear of Deque. Return true if the operation is successful. */
func (this *MyCircularDeque) DeleteLast() bool {
    if(this.IsEmpty()) {return false}
    this.list = this.list[0: len(this.list) - 1]
    return true
}


/** Get the front item from the deque. */
func (this *MyCircularDeque) GetFront() int {
    if(this.IsEmpty()) {return -1}
    return this.list[0]
}


/** Get the last item from the deque. */
func (this *MyCircularDeque) GetRear() int {
    if(this.IsEmpty()) {return -1}
    return this.list[len(this.list) - 1]
}


/** Checks whether the circular deque is empty or not. */
func (this *MyCircularDeque) IsEmpty() bool {
    return len(this.list) == 0
}


/** Checks whether the circular deque is full or not. */
func (this *MyCircularDeque) IsFull() bool {
    return len(this.list) == this.k
}


/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * obj := Constructor(k);
 * param_1 := obj.InsertFront(value);
 * param_2 := obj.InsertLast(value);
 * param_3 := obj.DeleteFront();
 * param_4 := obj.DeleteLast();
 * param_5 := obj.GetFront();
 * param_6 := obj.GetRear();
 * param_7 := obj.IsEmpty();
 * param_8 := obj.IsFull();
 */
