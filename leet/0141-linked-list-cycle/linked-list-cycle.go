/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func hasCycle(head *ListNode) bool {
    if head == nil || head.Next == nil {return false}
    
    fast := head
    slow := head
    
    for fast != nil && slow != nil {
        fast = fast.Next 
        if fast != nil {fast = fast.Next}
        slow = slow.Next
        
        if fast == slow {
            return true
        }
    }
    
    return false
}
