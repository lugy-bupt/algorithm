/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func pruneTree(root *TreeNode) *TreeNode {
    
    if root == nil { return nil }
    
    if root.Left != nil && root.Left.Val == 0 && allZero(root.Left) {
        root.Left = nil
    }
    
    if root.Right != nil && root.Right.Val == 0 && allZero(root.Right) {
        root.Right = nil
    }
    
    pruneTree(root.Left)
    pruneTree(root.Right)
    
    return root
}

func allZero(root *TreeNode) bool {
    if root == nil { return true} 
    if root.Val != 0 {return false}
    return (allZero(root.Left) && allZero(root.Right));
}
