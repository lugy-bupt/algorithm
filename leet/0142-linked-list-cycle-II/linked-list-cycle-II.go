/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func detectCycle(head *ListNode) *ListNode {
    if(head == nil || head.Next == nil) {return nil}
    
    cache := make(map[*ListNode]int)
    
    for count := 0; head != nil; count++ {
        if _, ok := cache[head]; ok{
            return head
        } else{
            cache[head] = count
            head = head.Next
        }
    }
    
    return nil
}
