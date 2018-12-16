/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func swapPairs(head *ListNode) *ListNode {
    if head == nil || head.Next == nil {return head}
    
    var dummy ListNode
    dummy.Next = head
    
    last := &dummy
    current := dummy.Next
    next := current.Next
    
    for current != nil && next != nil{
        last.Next = next
        current.Next = next.Next
        next.Next = current
        
        last = current
        current = current.Next
        if current != nil {
            next = current.Next
        }
    }
    
    return dummy.Next
}
