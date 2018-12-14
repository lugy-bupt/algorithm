/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func hasPathSum(root *TreeNode, sum int) bool {
    if root == nil {return false}
    
    if sum == root.Val && root.Left == nil && root.Right == nil {return true}
    
    return (hasPathSum(root.Left, sum-root.Val) || hasPathSum(root.Right, sum-root.Val))
}
