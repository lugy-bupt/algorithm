/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
type BSTIterator struct {
    list []int 
}


func Constructor(root *TreeNode) BSTIterator {
    var b BSTIterator;
    b.list = inorderTraversal(root)
    return b
}

func inorderTraversal(root *TreeNode) []int {
    if(root == nil) {return []int{}}
    
    rs := make([]int, 0)
    rs = append(rs, inorderTraversal(root.Left)...)
    rs = append(rs, root.Val)
    rs = append(rs, inorderTraversal(root.Right)...)
    
    return rs
}


/** @return the next smallest number */
func (this *BSTIterator) Next() int {
    rs := this.list[0]
    this.list = this.list[1:]
    return rs
}


/** @return whether we have a next smallest number */
func (this *BSTIterator) HasNext() bool {
    return len(this.list) > 0
}


/**
 * Your BSTIterator object will be instantiated and called as such:
 * obj := Constructor(root);
 * param_1 := obj.Next();
 * param_2 := obj.HasNext();
 */
