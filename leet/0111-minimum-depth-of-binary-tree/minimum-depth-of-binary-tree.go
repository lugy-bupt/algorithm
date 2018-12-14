/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func minDepth(root *TreeNode) int {
    if root == nil {return 0}
    
    depth := 1
    left := minDepth(root.Left)
    right := minDepth(root.Right)
    
    if left == 0 && right == 0 {return depth}
    if left == 0 && right != 0 {return depth + right}
    if left != 0 && right == 0 {return depth + left}
    if(left > right) {return depth + right}
    return depth + left
}
