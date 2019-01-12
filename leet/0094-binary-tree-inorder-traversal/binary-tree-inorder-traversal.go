/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func inorderTraversal(root *TreeNode) []int {
    if(root == nil) {return []int{}}
    
    rs := make([]int, 0)
    rs = append(rs, inorderTraversal(root.Left)...)
    rs = append(rs, root.Val)
    rs = append(rs, inorderTraversal(root.Right)...)
    
    return rs
}
