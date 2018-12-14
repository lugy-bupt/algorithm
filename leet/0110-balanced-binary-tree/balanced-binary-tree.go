/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isBalanced(root *TreeNode) bool {
    if root == nil {return true}
    
    left := getDepth(root.Left)
    right := getDepth(root.Right)
    
    result := (left - right < 2 && left - right > -2)
    
    if(!result){ return false }
    
    return (isBalanced(root.Left) && isBalanced(root.Right))
}

func getDepth(root *TreeNode) int {
    if root == nil {return 0}
    num := 1
    
    left := getDepth(root.Left)
    right := getDepth(root.Right)
    
    if left > right { return num + left }
    return num + right
}
