/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func deleteDuplicates(head *ListNode) *ListNode {
    if(head == nil || head.Next == nil) { return head }
    
    dummy := ListNode{Next: head}
    last := &dummy
    current := head
    
    for current != nil {
        if(current.Next != nil && current.Val == current.Next.Val){
            c1 := current
            for c1 != nil && c1.Val == current.Val {
                c1 = c1.Next
            }
            
            last.Next = c1
            current = c1
        } else {
            last = current
            current = current.Next
        }
    }
    
    return dummy.Next
}
