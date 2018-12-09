/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
    if l1 == nil {return l2}
    if l2 == nil {return l1}
    
    var add int = 0;
    var dummy ListNode
    last := &dummy
    
    for(l1 != nil || l2 != nil || add != 0) {
        var v1, v2, i int 
        if l1 == nil {v1 = 0} else {v1 = l1.Val}
        if l2 == nil {v2 = 0} else {v2 = l2.Val}
        
        i = v1 + v2 + add
        add = i / 10
        var node ListNode
        node.Val = i % 10
        last.Next = &node
        last = last.Next
        
        if l1 != nil {l1 = l1.Next}
        if l2 != nil {l2 = l2.Next}
    }
    
    return dummy.Next;
}
