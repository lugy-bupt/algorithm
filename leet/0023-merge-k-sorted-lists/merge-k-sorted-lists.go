tion for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func mergeKLists(lists []*ListNode) *ListNode {
    if lists == nil || len(lists) == 0 {return nil}
    
    var dummy ListNode
    last := &dummy
    length := len(lists)
    
    for (true) {
        notNil := false
        minNode := &ListNode{Val : int(^uint(0) >> 1)}
        minIndex := 0
        for i := 0; i < length; i++ {
            if lists[i] != nil { 
                notNil = true
                if lists[i].Val < minNode.Val {
                    minNode = lists[i]
                    minIndex = i
                }
            }
        }
        
        if(notNil) {
            last.Next = minNode
            last = last.Next
            lists[minIndex] = lists[minIndex].Next
        } else {
           break; 
        }
    }
    
    return dummy.Next
}
