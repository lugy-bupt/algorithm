/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isSymmetric(root *TreeNode) bool {
    if root == nil {return true}
    if root.Left == nil && root.Right == nil {return true}
    
    list := make([]*TreeNode, 2)
    list[0] = root.Left
    list[1] = root.Right
    
    for len(list) != 0 {
        i := 0
        j := len(list) - 1
        for i < j {
            if((list[i] != nil && list[j] == nil) || list[i] == nil && list[j] != nil || (list[i] != nil && list[j] != nil && list[i].Val != list[j].Val) ){
                return false
            }
            
            i++; j--
        }
        
        temp := make([]*TreeNode, 0)
        
        for k := 0; k < len(list); k++ {
            if(list[k] != nil){
                temp = append(temp, list[k].Left)
                temp = append(temp, list[k].Right)
            }
        }
        
        list = temp
    }
    
    return true
}
