/**
 * Definition for TreeNode.
 * type TreeNode struct {
 *     Val int
 *     Left *ListNode
 *     Right *ListNode
 * }
 */
 func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
     if root == nil || p == nil || q == nil {return nil}
     
     rootVal := root.Val
     pVal := p.Val
     qVal := q.Val
     
     if (pVal == rootVal || qVal == rootVal) {return root}
     if ((pVal < rootVal && qVal > rootVal) || (pVal > rootVal && qVal < rootVal)) {return root}
     if (pVal < rootVal && qVal < rootVal) { return lowestCommonAncestor(root.Left, p, q)}
     return lowestCommonAncestor(root.Right, p, q)
}
