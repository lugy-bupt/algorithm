/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func pathSum(root *TreeNode, sum int) [][]int {
    if root == nil {return [][]int{}}
    
    left := sum - root.Val
    r := make([]int, 1)
    r[0] = root.Val
    
    if left == 0 && root.Left == nil && root.Right == nil{
        result := make([][]int, 1)
        result[0] = r
        return result
    }
    
    leftResult := pathSum(root.Left, left)
    rightResult := pathSum(root.Right, left)
    
    allResult := append(leftResult, rightResult...)
    
    for i := 0; i < len(allResult); i++ {
        allResult[i] = append(r, allResult[i]...)
    }
    
    return allResult
}
