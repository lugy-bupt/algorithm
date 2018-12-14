/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func sortedListToBST(head *ListNode) *TreeNode {
    if head == nil {return nil}
    
    current := head
    list := make([]*ListNode, 0)
    
    for current != nil {
        list = append(list, current)
        current = current.Next
    }
    
    return sortedWithStart(list, 0, len(list) - 1)
}

func sortedWithStart(list []*ListNode, start int, end int) *TreeNode {
    mid := (start + end) / 2
    midNode := TreeNode{Val : list[mid].Val}
    
    if start < mid {midNode.Left = sortedWithStart(list, start, mid - 1)}
    if mid < end {midNode.Right = sortedWithStart(list, mid + 1, end)}
    
    return &midNode
}
