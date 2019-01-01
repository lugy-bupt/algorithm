/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func buildTree(inorder []int, postorder []int) *TreeNode {
    
    if(len(inorder) != len(postorder)) { return nil }
    length := len(inorder)
    if(length == 0) { return nil }
    if(length == 1) { return &TreeNode{Val:inorder[0]}}
    
    root := postorder[len(postorder) - 1]
    rs := TreeNode{Val:root}
    
    index := 0
    for i, v := range inorder {
        if v == root {
            index = i
            break
        }
    }
    
    rs.Left = buildTree(inorder[0:index], postorder[0:index])
    rs.Right = buildTree(inorder[index + 1:], postorder[index: len(postorder) - 1])
    
    
    return &rs    
}
