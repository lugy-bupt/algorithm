/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isValidBST(root *TreeNode) bool {
    
    if root == nil {return true}
    
    if root.Left != nil {
        left := make([]*TreeNode, 1)
        left[0] = root.Left
        
        for i := 0; i < len(left); i++ {
            if left[i].Val >= root.Val {return false}
            
            if left[i].Left != nil {left = append(left, left[i].Left)}
            if left[i].Right != nil {left = append(left, left[i].Right)}
        }
    }
    
    if root.Right != nil {
        right := make([]*TreeNode, 1)
        right[0] = root.Right
        
        for i := 0; i < len(right); i++ {
            if right[i].Val <= root.Val {return false}
            
            if right[i].Left != nil {right = append(right, right[i].Left)}
            if right[i].Right != nil {right = append(right, right[i].Right)}
        }
    }
    
    return isValidBST(root.Left) && isValidBST(root.Right)
    
}
