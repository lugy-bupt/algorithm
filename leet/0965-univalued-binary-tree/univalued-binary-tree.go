/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isUnivalTree(root *TreeNode) bool {
    if root == nil {return true}
    
    if (root.Left != nil && root.Val != root.Left.Val) || (root.Right != nil && root.Val != root.Right.Val) {return false}

    return isUnivalTree(root.Left) && isUnivalTree(root.Right)
}
