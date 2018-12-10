/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func mergeTwoLists(l1 *ListNode, l2 *ListNode) *ListNode {  
    dummy := &ListNode{Val: -1}
    last := dummy
    
    for l1 != nil || l2 != nil {
        if l1 == nil {
            last.Next = l2
            break;
        }
        if l2 == nil {
            last.Next = l1
            break;
        }
        
        if l1.Val < l2.Val{
            last.Next = l1
            last = last.Next
            l1 = l1.Next
        }else{
            last.Next = l2
            last = last.Next
            l2 = l2.Next
        }
    }
    
    return dummy.Next
}
