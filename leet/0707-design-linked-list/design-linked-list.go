type MyLinkedList struct {
    Head *MyListNode
}

type MyListNode struct{
    Val int
    Next *MyListNode
}


/** Initialize your data structure here. */
func Constructor() MyLinkedList {
    return MyLinkedList{Head: &MyListNode{}}
}


/** Get the value of the index-th node in the linked list. If the index is invalid, return -1. */
func (this *MyLinkedList) Get(index int) int {
    current := this.Head
    for current.Next != nil && index > -1 {
        current = current.Next
        index--
    }
    
    if(index == -1){
        return current.Val
    } else{
        return -1
    }
}


/** Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. */
func (this *MyLinkedList) AddAtHead(val int)  {
    this.Head.Next = &MyListNode{Val:val, Next:this.Head.Next}
}


/** Append a node of value val to the last element of the linked list. */
func (this *MyLinkedList) AddAtTail(val int)  {
    current := this.Head
    for current.Next != nil {
        current = current.Next
    }
    current.Next = &MyListNode{Val:val}
}


/** Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. */
func (this *MyLinkedList) AddAtIndex(index int, val int)  {
    current := this.Head
    for current.Next != nil && index > 0{
        current = current.Next
        index--
    }
    
    if(index == 0){
        current.Next = &MyListNode{Val: val, Next: current.Next}
    }
}


/** Delete the index-th node in the linked list, if the index is valid. */
func (this *MyLinkedList) DeleteAtIndex(index int)  {
    current := this.Head
    for current.Next != nil && index > 0{
        current = current.Next
        index--
    }
    
    if(index == 0 && current.Next != nil){
        current.Next = current.Next.Next
    }
}


/**
 * Your MyLinkedList object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.Get(index);
 * obj.AddAtHead(val);
 * obj.AddAtTail(val);
 * obj.AddAtIndex(index,val);
 * obj.DeleteAtIndex(index);
 */
