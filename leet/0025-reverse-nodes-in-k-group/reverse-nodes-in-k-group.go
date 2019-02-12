/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func reverseKGroup(head *ListNode, k int) *ListNode {
    if k == 1 {return head}
    
    var dummy ListNode
    dummy.Next = head
    last := &dummy
    current := last.Next
    
    for current != nil {
        num := 0
        list := make([]*ListNode, k)
        for ;current != nil && num < k; num++{
            list[num] = current
            current = current.Next
        }
        
        if num < k {
            last.Next = list[0]
        } else {
            // reverse 
            for i := k - 1; i >= 0; i-- { 
                last.Next = list[i] 
                last = last.Next
            }
            last = list[0]
            last.Next = nil
        }
    }
    
    return dummy.Next
}
