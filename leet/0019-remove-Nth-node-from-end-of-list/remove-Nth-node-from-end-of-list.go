/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func removeNthFromEnd(head *ListNode, n int) *ListNode {
    var dummy ListNode
    dummy.Next = head
    
    fast := &dummy
    slow := &dummy
    last := &dummy
    
    for i := n; i > 0; i-- {
        fast = fast.Next
    }
    
    for fast != nil {
        fast = fast.Next
        last = slow
        slow = slow.Next
    }
    
    last.Next = slow.Next
    return dummy.Next
}
