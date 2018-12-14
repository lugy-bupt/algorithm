/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func sortedArrayToBST(nums []int) *TreeNode {
    if nums == nil || len(nums) == 0 {return nil}
    return sortedArrayToBSTwithStartAndEnd(nums, 0, len(nums) - 1)
}

func sortedArrayToBSTwithStartAndEnd(nums []int, start int, end int) *TreeNode {
    mid :=  (start + end) / 2
    midNode := TreeNode{Val : nums[mid]}
    if start < mid {midNode.Left = sortedArrayToBSTwithStartAndEnd(nums, start, mid - 1)}
    if mid < end {midNode.Right = sortedArrayToBSTwithStartAndEnd(nums, mid + 1, end)}
    return &midNode
}
