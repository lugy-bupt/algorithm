/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func rotateRight(head *ListNode, k int) *ListNode {
    if head == nil || head.Next == nil { return head}

    fast := head
	slow := head
	
	for ;k > 0; k-- {
		fast = fast.Next
		if fast == nil {
			fast = head
		}
	}
	
	if fast == head {return head}
	
	for fast.Next != nil {
		fast = fast.Next
		slow = slow.Next
	}
	
	newHead := slow.Next
	slow.Next = nil
	fast.Next = head
	
	return newHead
}
