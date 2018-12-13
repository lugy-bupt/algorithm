/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func maxDepth(root *TreeNode) int {
    if root == nil {return 0}
    
    leftDep := maxDepth(root.Left)
    rightDep := maxDepth(root.Right)
    
    if (leftDep > rightDep) {return leftDep + 1}
    return rightDep + 1
}
