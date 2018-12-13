/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func deleteDuplicates(head *ListNode) *ListNode {
    last := head
    
    for last != nil {
        next := last.Next
        
        if next != nil && next.Val == last.Val{
            last.Next = next.Next
            continue
        }
        
        last = next
    }
    
    return head
}
