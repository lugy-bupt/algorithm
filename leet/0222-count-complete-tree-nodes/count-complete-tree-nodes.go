/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func countNodes(root *TreeNode) int {
    if(root == nil) {return 0}
    
    list := []*TreeNode{root}
    i := 0
    
    for ; i < len(list); i++ {
        if list[i].Left != nil {list = append(list, list[i].Left)}
        if list[i].Right != nil {list = append(list, list[i].Right)}
    }
    
    return i
}
