/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func partition(head *ListNode, x int) *ListNode {
	dummy := ListNode{Next: head}
	
	before := &dummy
	split := head
	
	for split != nil && split.Val < x {
		before = split
		split = split.Next
	}
	
    if(split == nil || split.Next == nil) {
        return dummy.Next
    }
    
	last := split
	current := split.Next
	
	for current != nil {
		if(current.Val < x){
			last.Next = current.Next
			before.Next = current
			current.Next = split
			
			before = before.Next
			current = last.Next
        }else{
            last = current
            current = current.Next
        }
	}
	
	return dummy.Next
}
