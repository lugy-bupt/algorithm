/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func zigzagLevelOrder(root *TreeNode) [][]int {
    rs := make([][]int, 0);
    if(root == nil) {return rs}
    
    zig := true
    layer := make([]*TreeNode, 1)
    layer[0] = root
    
    for len(layer) != 0 {
        x := make([]int, 0)
        temp := make([]*TreeNode, 0)
        
        for _, v := range layer {
            x = append(x, v.Val)
            if(v.Left != nil) {temp = append(temp, v.Left)}
            if(v.Right != nil) {temp = append(temp, v.Right)}
        }
        
        if(zig){
            rs = append(rs, x)
        } else{
            y := make([]int, 0)
            for i := len(x) - 1; i >= 0; i-- {
                y = append(y, x[i])
            }
            rs = append(rs, y)
        }
        
        layer = temp
        zig = !zig
    } 
    
    return rs
}
