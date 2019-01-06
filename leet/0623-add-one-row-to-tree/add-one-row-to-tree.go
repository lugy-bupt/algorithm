/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func addOneRow(root *TreeNode, v int, d int) *TreeNode {
    if (d == 1) { return &TreeNode{Val:v,Left:root} }
    
    cache := make([]*TreeNode, 0)
    cache = append(cache, root)
    
    for d > 2 {
        temp := make([]*TreeNode, 0) 
        for _, node := range cache {
            if(node.Left != nil) { temp = append(temp, node.Left) }
            if(node.Right != nil) { temp = append(temp, node.Right) }
        }
        
        cache = temp
        d--
    }
    
    for _, node := range cache {
        node.Left = &TreeNode{Val:v, Left:node.Left}
        node.Right = &TreeNode{Val:v, Right:node.Right}
    }
    
    return root
}
