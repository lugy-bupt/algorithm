/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func middleNode(head *ListNode) *ListNode {
    
    if head == nil || head.Next == nil {return head}
    
    list := make([]*ListNode, 0)
    for head != nil {
        list = append(list, head)
        head = head.Next
    }
    half := len(list) / 2
    return list[half]
    
}
