/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func averageOfLevels(root *TreeNode) []float64 {
    
    if root == nil { return []float64{} }
    
    list := make([] *TreeNode, 1)
    list[0] = root
    length := 1
    
    result := make([]float64, 0)
    
    for length != 0 {
        newList := make([] *TreeNode, 0)
        layerSum := 0
        
        for i := 0; i < length; i++ {
            layerSum += list[i].Val
            if list[i].Left != nil {newList = append(newList, list[i].Left)}
            if list[i].Right != nil {newList = append(newList, list[i].Right)}
        }
        
        result = append(result, float64(layerSum)/float64(length))
        
        list = newList
        length = len(list)
    }
    
    return result
}
