/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func minDiffInBST(root *TreeNode) int {
    ints := inorderTraversal(root)
    
    if (len(ints) < 2) {return 0 }
    
    rs := 0
    last := 0
    for i, num := range ints {
        diff := num - last
        last = num
        if(i == 0) { continue }
        if(i == 1) { rs = diff; continue}
        if (rs > diff) {rs = diff}
    }
    
    return rs
}

func inorderTraversal(root *TreeNode) []int {
    if(root == nil) {return []int{}}
    
    rs := make([]int, 0)
    rs = append(rs, inorderTraversal(root.Left)...)
    rs = append(rs, root.Val)
    rs = append(rs, inorderTraversal(root.Right)...)
    
    return rs
}
