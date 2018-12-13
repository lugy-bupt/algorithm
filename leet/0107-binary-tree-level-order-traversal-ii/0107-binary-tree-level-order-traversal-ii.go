/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func levelOrderBottom(root *TreeNode) [][]int {
    if root == nil {return [][]int{}}
    
    result := make([][]int, 0)
    layer := make([]*TreeNode, 1)
    layer[0] = root
    layerLength := len(layer)
    
    for layerLength != 0 {
        
        layerInt := make([]int, layerLength)
        
        newLayer := make([]*TreeNode, 0)
        
        for i := 0; i < layerLength; i++ {
            layerInt[i] = layer[i].Val
            if layer[i].Left != nil {
                newLayer = append(newLayer, layer[i].Left)
            }
            if layer[i].Right != nil {
                newLayer = append(newLayer, layer[i].Right)
            }
        }
        
        result = append(result, layerInt)
        layer = newLayer
        layerLength = len(layer)
        
        // break
    }
    
    length := len(result)
    result1 := make([][]int, length)
    
    for i := 0; i < length; i++ {
        result1[length - 1 - i] = result[i]
    }
    
    return result1
}
