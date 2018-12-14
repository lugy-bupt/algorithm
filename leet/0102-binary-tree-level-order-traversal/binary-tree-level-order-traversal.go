/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func levelOrder(root *TreeNode) [][]int {
    result := make([][]int, 0)
    if root == nil {return result}
    
    list := make([]*TreeNode, 1)
    list[0] = root
    length := len(list)
    
    for length != 0 {
        newList := make([]*TreeNode, 0)
        intList := make([]int, length)
        
        for i := 0; i < length; i++ {
            intList[i] = list[i].Val
            if list[i].Left != nil {newList = append(newList, list[i].Left)}
            if list[i].Right != nil {newList = append(newList, list[i].Right)}
        }
        
        result = append(result, intList)
        list = newList
        length = len(list)
    }
    
    return result
}
